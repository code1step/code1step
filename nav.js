

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  const toggleIcon = toggleBtn.querySelector("i"); // Get the icon inside the button

  if (!toggleBtn || !menu || !toggleIcon) {
    console.warn("Navbar elements not found. Skipping toggle script.");
    return;
  }

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("show");

    // Toggle icon between bars and times
    toggleIcon.classList.toggle("fa-bars");
    toggleIcon.classList.toggle("fa-times");
  });
});
