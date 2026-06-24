(function () {
  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function revealOnScroll() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length || reduceMotion.matches || !("IntersectionObserver" in window)) {
      items.forEach(function (item) {
        item.classList.add("is-visible");
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
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    items.forEach(function (item) {
      observer.observe(item);
    });
  }

  function magneticButtons() {
    var buttons = document.querySelectorAll(".magnetic");
    if (!buttons.length || reduceMotion.matches) return;

    buttons.forEach(function (button) {
      button.addEventListener("pointermove", function (event) {
        if (event.pointerType === "touch") return;
        var rect = button.getBoundingClientRect();
        var x = (event.clientX - rect.left - rect.width / 2) * 0.16;
        var y = (event.clientY - rect.top - rect.height / 2) * 0.2;
        button.style.transform = "translate3d(" + x + "px, " + y + "px, 0)";
      });

      button.addEventListener("pointerleave", function () {
        button.style.transform = "";
      });

      button.addEventListener("blur", function () {
        button.style.transform = "";
      });
    });
  }

  function ambientParallax() {
    var hero = document.querySelector("[data-parallax]");
    if (!hero || reduceMotion.matches) return;

    var ticking = false;

    function update() {
      var rect = hero.getBoundingClientRect();
      var progress = Math.max(-1, Math.min(1, rect.top / window.innerHeight));
      hero.style.setProperty("--parallax-y", progress * -18 + "px");
      ticking = false;
    }

    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });

    update();
  }

  revealOnScroll();
  magneticButtons();
  ambientParallax();
})();
