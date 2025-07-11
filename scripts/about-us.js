function revealAboutSection() {
  const about = document.querySelector('.about-section');
  const sectionTop = about.getBoundingClientRect().top;
  const trigger = window.innerHeight * 0.85;

  if (sectionTop < trigger) {
    about.classList.add('visible');
    window.removeEventListener('scroll', revealAboutSection);
  }
}

window.addEventListener('scroll', revealAboutSection);
window.addEventListener('load', revealAboutSection);