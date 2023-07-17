const list = document.querySelectorAll('li.item');

console.log('Number of categories: ' + list.length);

list.forEach(li => {
    console.log('Category: ' + li.firstElementChild.textContent);
    console.log('Elements: ' + li.lastElementChild.children.length);
})