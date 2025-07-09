function positionCircleItems() {
  const items = document.querySelectorAll(".circle-container-desktop .circle-item");
  const container = document.querySelector(".circle-container-desktop");

  if (!container || items.length === 0) return;

  const radius = 200;
  const centerX = container.offsetWidth / 2;
  const centerY = container.offsetHeight / 2;
  const angleStep = (2 * Math.PI) / items.length;

  items.forEach((item, index) => {
    const angle = index * angleStep - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle) - item.offsetWidth / 2;
    const y = centerY + radius * Math.sin(angle) - item.offsetHeight / 2;

    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
  });
}

// Run once on page load
document.addEventListener("DOMContentLoaded", () => {
  positionCircleItems();
});

// Re-run when window is resized
window.addEventListener("resize", () => {
  // Only run if desktop version is visible
  const container = document.querySelector(".circle-container-desktop");
  if (getComputedStyle(container).display !== "none") {
    positionCircleItems();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".reveal-new, .reveal-center");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight - 100;

    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < triggerBottom) {
        const delay = el.dataset.delay || "0s";
        const speed = el.dataset.speed || "0.6s";

        el.style.transitionDelay = delay;
        el.style.transitionDuration = speed;

        // Determine the correct active class
        if (el.classList.contains("reveal-center")) {
          el.classList.add("active-new"); // You can rename this to active-center if needed
        } else {
          el.classList.add("active-new");
        }
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);
});
