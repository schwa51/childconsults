(function () {
  const lab = document.querySelector("#design-lab");
  const switcherButtons = document.querySelectorAll("[data-theme-option]");
  const previewMenuToggle = document.querySelector(".lab-preview__menu-toggle");
  const previewMenu = document.querySelector(".lab-preview__nav");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const themeStorageKey = "child-consults-design-lab-theme";

  if (!lab || !switcherButtons.length) {
    return;
  }

  const setTheme = (theme) => {
    lab.dataset.theme = theme;

    switcherButtons.forEach((button) => {
      const isActive = button.dataset.themeOption === theme;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    try {
      sessionStorage.setItem(themeStorageKey, theme);
    } catch (error) {
      // Session persistence is helpful, but the lab should still work without storage.
    }
  };

  const initialTheme = (() => {
    try {
      return sessionStorage.getItem(themeStorageKey) || lab.dataset.theme;
    } catch (error) {
      return lab.dataset.theme;
    }
  })();

  setTheme(initialTheme);

  switcherButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setTheme(button.dataset.themeOption);
    });
  });

  if (previewMenuToggle && previewMenu) {
    previewMenuToggle.addEventListener("click", () => {
      const isOpen = previewMenu.classList.toggle("is-open");
      previewMenuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const revealTargets = lab.querySelectorAll("[data-reveal]");

  if (!reduceMotion.matches && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -5% 0px" }
    );

    revealTargets.forEach((target, index) => {
      target.style.transitionDelay = `${Math.min(index * 45, 220)}ms`;
      observer.observe(target);
    });
  } else {
    revealTargets.forEach((target) => {
      target.classList.add("is-visible");
    });
  }
})();
