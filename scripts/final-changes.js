document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll(".section-title, .section-subtitle");

    // Add animate-init class immediately on load
    targets.forEach(el => el.classList.add("animate-init"));

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-show");
          entry.target.classList.remove("animate-init");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    targets.forEach(el => observer.observe(el));
  });