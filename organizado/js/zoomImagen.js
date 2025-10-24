// zoomImagen.js

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.imagen-contenedor').forEach(container => {
    const img = container.querySelector('.producto1');

    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      img.style.transformOrigin = `${x}% ${y}%`;
    });

    container.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(2)';
    });

    container.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
      img.style.transformOrigin = 'center center';
    });
  });
});
