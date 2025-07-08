document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.querySelector('.search-input');
  const links = document.querySelectorAll('.dropdown-content a');
  const dropdownContent = document.querySelector('.dropdown-content');

  searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase();
    dropdownContent.style.display = 'block';

    links.forEach(link => {
      const text = link.textContent.toLowerCase();
      if (text.includes(filter)) {
        link.style.display = '';
      } else {
        link.style.display = 'none';
      }
    });
  });
});
