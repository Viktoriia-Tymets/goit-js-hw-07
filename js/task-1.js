const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('li.item');
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {
    const categoryText = item.querySelector('h2').textContent;
    const totalElements = item.querySelectorAll('li').length;
    console.log(`Category: ${categoryText}`);
    console.log(`Elements: ${totalElements}`);
})
