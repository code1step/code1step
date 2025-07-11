 const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section = entry.target;
        section.classList.add('active');

        const line = section.querySelector('.process-line-horizontal');
        line.style.width = '100%';

        const boxes = section.querySelectorAll('.process-step-box');
        boxes.forEach((box, index) => {
          setTimeout(() => box.classList.add('visible'), 300 + index * 300);
        });
      }
    });
  }, {
    threshold: 0.3
  });

  observer.observe(document.querySelector('.process-section'));