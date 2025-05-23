function filterMenu(type) {
  const items = document.querySelectorAll('.menu-item');
  items.forEach(item => {
    if (type === 'all') {
      item.classList.remove('hidden');
    } else {
      if (item.classList.contains(type)) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    }
  });
}
