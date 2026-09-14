(function () {
  var heroPool = [
    "/assets/images/fc1.png",
    "/assets/images/fc-plus.jpg",
    "/assets/images/IMG_2121.jpg",
    "/assets/images/IMG_2035.JPG",
    "/assets/images/32bb0f70-5cc1-479b-a1b6-6b0a85d70dbe.jpg",
    "/assets/images/69d98f47-a2a2-4eeb-af7e-f937f299e673-1775774499992-3.jpg",
    "/assets/images/IMG_2030.JPG",
    "/assets/images/IMG_2010.webp",
    "/assets/images/1-1776213814761-1.JPG"
  ];

  var main = document.getElementById("hero-img-main");
  var floatImg = document.getElementById("hero-img-float");
  if (main && floatImg && heroPool.length >= 2) {
    var pool = heroPool.slice();
    for (var i = pool.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = pool[i];
      pool[i] = pool[j];
      pool[j] = tmp;
    }
    main.src = pool[0];
    floatImg.src = pool[1];
  }

  var cards = Array.prototype.slice.call(document.querySelectorAll(".project-card"));
  var filterLinks = Array.prototype.slice.call(document.querySelectorAll(".filter-link"));
  var emptyMsg = document.querySelector(".project-filter-empty");
  var validFilters = { product: true, project: true, audio: true, software: true };

  function currentFilter() {
    try {
      var params = new URLSearchParams(window.location.search);
      var filter = params.get("filter");
      return validFilters[filter] ? filter : null;
    } catch (e) {
      return null;
    }
  }

  function revealCards(list) {
    list.forEach(function (card, i) {
      card.classList.remove("is-visible");
      if (card.hidden) return;
      card.style.transitionDelay = Math.min(i * 0.05, 0.25) + "s";
      requestAnimationFrame(function () {
        card.classList.add("is-visible");
      });
    });
  }

  function applyFilter(filter, updateUrl) {
    var visibleCount = 0;
    cards.forEach(function (card) {
      var tags = (card.getAttribute("data-tags") || "").split(/\s+/);
      var show = !filter || tags.indexOf(filter) !== -1;
      card.hidden = !show;
      if (show) visibleCount += 1;
    });
    filterLinks.forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("data-filter") === filter);
    });
    if (emptyMsg) emptyMsg.hidden = visibleCount > 0;

    if (updateUrl && window.history && window.history.replaceState) {
      var url = window.location.pathname;
      if (filter) url += "?filter=" + encodeURIComponent(filter);
      window.history.replaceState({}, "", url);
    }

    if (cards.length) {
      revealCards(cards.filter(function (card) { return !card.hidden; }));
    }
  }

  // On homepage, intercept nav filter clicks so we don't full-reload
  if (cards.length) {
    filterLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        var filter = link.getAttribute("data-filter");
        if (!filter || !validFilters[filter]) return;
        event.preventDefault();
        applyFilter(filter, true);
        var anchor = document.getElementById("projects");
        if (anchor) {
          anchor.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    applyFilter(currentFilter(), false);

    if (!("IntersectionObserver" in window)) {
      revealCards(cards.filter(function (card) { return !card.hidden; }));
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    cards.forEach(function (card, i) {
      if (card.hidden) return;
      card.style.transitionDelay = Math.min(i * 0.05, 0.25) + "s";
      observer.observe(card);
    });
  } else {
    // Mark active filter link when on other pages after navigating back isn't needed;
    // highlight if URL somehow has filter (won't on about). No-op.
    var filter = currentFilter();
    filterLinks.forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("data-filter") === filter);
    });
  }
})();
