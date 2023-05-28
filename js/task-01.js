const categoriesCount = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesCount.length}`);

categoriesCount.forEach((element) => {
  const categoryName = element.querySelector("h2");
  const categoryEl = element.querySelectorAll("li");
  console.log(`Category: ${categoryName.textContent}`);
  console.log(`Elements: ${categoryEl.length}`);
});
