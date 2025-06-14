// Animation au défilement (apparition douce)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeIn 1s forwards';
    }
  });
});

document.querySelectorAll('section, .card, .lineup li').forEach(el => {
  el.style.opacity = 0;
  observer.observe(el);
});

// Effet de survol dynamique sur images
const images = document.querySelectorAll('.gallery img');
images.forEach(img => {
  img.addEventListener('mousemove', (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    img.style.transform = `scale(1.05) rotateX(${(y - 100) / 20}deg) rotateY(${(x - 150) / 20}deg)`;
  });
  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});
