document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  const toggleIcon = toggleBtn.querySelector("i");
  const header = document.querySelector(".main-header");
  const navMenu = document.querySelector(".nav-menu");
  const contactBtn = document.querySelector(".nav-contact-btn");

  // Toggle hamburger menu
  if (toggleBtn && menu && toggleIcon) {
    toggleBtn.addEventListener("click", () => {
      menu.classList.toggle("show");
      toggleIcon.classList.toggle("fa-bars");
      toggleIcon.classList.toggle("fa-times");
    });
  }

  // Scroll-based class toggle
  function handleScroll() {
    if (window.scrollY > 10) {
      header.classList.add("scrolled");
      navMenu.classList.add("scrolled");
      contactBtn.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
      navMenu.classList.remove("scrolled");
      contactBtn.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // run once on load in case page is already scrolled

  // Smooth scroll to #contact when CONTACT US button is clicked
  if (contactBtn) {
    contactBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const contactSection = document.querySelector("#contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
