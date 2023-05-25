// wybieramy wszystkie elementy o klasie .item i wyświetlamy ilość

const categoriesCount = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesCount.length}`);

// metodą for each iterujemy po kazdym elemencie categoriesCount
// i dla kadego elementu wyświetlamy zawartość tagu h2 oraz ilość elementów li

categoriesCount.forEach(element => {
    const categoryName = element.querySelector("h2");
    const categoryEl = element.querySelectorAll("li");
    console.log(`Category: ${categoryName.textContent}`);
    console.log(`Elements: ${categoryEl.length}`); 
});