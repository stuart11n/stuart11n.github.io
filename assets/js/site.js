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

  var cards = document.querySelectorAll(".project-card");
  if (!cards.length) return;

  if (!("IntersectionObserver" in window)) {
    cards.forEach(function (card) {
      card.classList.add("is-visible");
    });
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
    card.style.transitionDelay = Math.min(i * 0.05, 0.25) + "s";
    observer.observe(card);
  });
})();
