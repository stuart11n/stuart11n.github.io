// Thumbs up/down counts per page, stored in the FEEDBACK KV namespace.
// GET  /api/feedback?page=/projects/gyrotach/   -> { up, down }
// POST /api/feedback  {"page": "...", "vote": "up" | "down"} -> { up, down }

const MAX_PAGE_LENGTH = 200;

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

function validPage(page) {
  return (
    typeof page === "string" &&
    page.length > 0 &&
    page.length <= MAX_PAGE_LENGTH &&
    page.startsWith("/") &&
    !page.includes("..") &&
    !/[\s?#]/.test(page)
  );
}

async function readCounts(kv, page) {
  const stored = await kv.get(`fb:${page}`, "json");
  return {
    up: Number(stored?.up) || 0,
    down: Number(stored?.down) || 0,
  };
}

export async function onRequestGet({ request, env }) {
  if (!env.FEEDBACK) return json({ error: "feedback store not configured" }, 500);

  const page = new URL(request.url).searchParams.get("page");
  if (!validPage(page)) return json({ error: "invalid page" }, 400);

  return json(await readCounts(env.FEEDBACK, page));
}

export async function onRequestPost({ request, env }) {
  if (!env.FEEDBACK) return json({ error: "feedback store not configured" }, 500);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid JSON" }, 400);
  }

  const { page, vote } = body ?? {};
  if (!validPage(page) || !["up", "down"].includes(vote)) {
    return json({ error: "invalid request" }, 400);
  }

  // Read-then-write: two votes in the same instant can cancel out. Fine for approximate counts.
  const counts = await readCounts(env.FEEDBACK, page);
  counts[vote] += 1;
  await env.FEEDBACK.put(`fb:${page}`, JSON.stringify(counts));

  return json(counts);
}

export async function onRequest({ request }) {
  return json({ error: `method ${request.method} not allowed` }, 405);
}
