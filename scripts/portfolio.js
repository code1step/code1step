document.addEventListener("DOMContentLoaded", () => {
  const portfolioCards = document.querySelectorAll(".reveal-portfolio");

  const revealOnScrollPortfolio = () => {
    const triggerBottom = window.innerHeight - 100;

    portfolioCards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerBottom) {
        const delay = parseInt(card.dataset.delay) || 0;

        setTimeout(() => {
          card.classList.add("active-portfolio");
        }, delay);
      }
    });
  };

  revealOnScrollPortfolio();
  window.addEventListener("scroll", revealOnScrollPortfolio);
});
