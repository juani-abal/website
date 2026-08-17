/* Aguirre & De Biase — interacciones: header al scroll, menú móvil, reveals */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  /* Header compacto al scrollear */
  var header = document.getElementById("header");
  var onScroll = function () {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Menú móvil */
  var menu = document.getElementById("menu");
  var openBtn = document.getElementById("menu-open");
  var closeBtn = document.getElementById("menu-close");

  var setMenu = function (open) {
    menu.hidden = !open;
    openBtn.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
    if (open) menu.querySelector("a").focus();
  };

  openBtn.addEventListener("click", function () {
    setMenu(true);
  });
  closeBtn.addEventListener("click", function () {
    setMenu(false);
  });
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      setMenu(false);
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !menu.hidden) setMenu(false);
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 900 && !menu.hidden) setMenu(false);
  });

  /* Reveals al entrar en pantalla */
  var items = Array.prototype.slice.call(
    document.querySelectorAll("[data-reveal]"),
  );

  var showAll = function () {
    items.forEach(function (el) {
      el.classList.add("is-visible");
    });
  };

  if (!("IntersectionObserver" in window)) {
    showAll();
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.style.setProperty(
          "--reveal-delay",
          (entry.target.dataset.delay || 0) + "ms",
        );
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
  );

  items.forEach(function (el) {
    io.observe(el);
  });

  /* Red de seguridad: si el documento no puede scrollear (embebido en un iframe
     que scrollea desde afuera), el observer nunca dispara — mostramos todo. */
  window.setTimeout(function () {
    var pending = items.filter(function (el) {
      return !el.classList.contains("is-visible");
    });
    if (!pending.length) return;
    var doc = document.documentElement;
    if (doc.scrollHeight > doc.clientHeight + 40 && window.scrollY === 0) {
      var y = window.scrollY;
      window.scrollTo(0, 1);
      var canScroll = window.scrollY > 0;
      window.scrollTo(0, y);
      if (!canScroll) showAll();
    }
  }, 400);
})();
