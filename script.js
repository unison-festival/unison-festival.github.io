// Animation au scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(section => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.8;
    if (top < trigger) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
});
