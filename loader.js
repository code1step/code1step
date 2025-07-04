window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const content = document.getElementById('main-content');

  setTimeout(() => {
    // Start fade-out
    preloader.classList.add('fade-out');

    // After fade-out completes
    setTimeout(() => {
      preloader.style.display = 'none';
      content.classList.remove('hidden');
      content.classList.add('visible');

      // Init 3D if available
      if (typeof initThreeJS === 'function') {
        initThreeJS();
      }
    }, 800); // match CSS transition duration
  }, 3500); // delay loader duration (adjust as needed)
});
