// Smooth scroll animation for steps
document.querySelectorAll('.step-item').forEach(step => {
  step.addEventListener('click', () => {
    step.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});