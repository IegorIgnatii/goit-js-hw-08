const quantityItemEl = document.querySelectorAll('.item');

console.log('Number of categories: ', quantityItemEl.length);

quantityItemEl.forEach(item => {
  console.log('Category: ', item.firstElementChild.textContent);
  console.log('Elements: ', item.lastElementChild.children.length);
});
