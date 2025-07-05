  document.addEventListener("DOMContentLoaded", () => {
    const lottieElements = document.querySelectorAll(".lottie-icon");

    lottieElements.forEach(el => {
      const path = el.getAttribute("data-json");

      if (path) {
        lottie.loadAnimation({
          container: el,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: path
        });
      }
    });
  });





  const track = document.querySelector(".services-track");
const section = document.querySelector(".services-section");
const sticky = document.querySelector(".scroll-container");

// === Adjustable Variables ===
const horizontalScrollDelayStart = 300;  // px before horizontal scroll starts
const horizontalScrollHoldEnd = 100;     // px delay after horizontal scroll ends

// Calculate max horizontal scroll distance
const getMaxScroll = () => track.scrollWidth - sticky.offsetWidth;

// Dynamically update section height
function updateSectionHeight() {
  const maxScroll = getMaxScroll();
  const totalScroll = horizontalScrollDelayStart + maxScroll + horizontalScrollHoldEnd;
  section.style.height = `${sticky.offsetHeight + totalScroll}px`;
}

// Call once on load and whenever window resizes
window.addEventListener("load", updateSectionHeight);
window.addEventListener("resize", updateSectionHeight);

// Scroll logic
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const offsetTop = section.offsetTop;
  const maxScroll = getMaxScroll();
  const scrollDistance = scrollTop - offsetTop - horizontalScrollDelayStart;

  if (scrollDistance < 0) {
    track.style.transform = `translateX(0px)`;
  } else if (scrollDistance <= maxScroll) {
    track.style.transform = `translateX(-${scrollDistance}px)`;
  } else if (scrollDistance <= maxScroll + horizontalScrollHoldEnd) {
    track.style.transform = `translateX(-${maxScroll}px)`;
  }
});
