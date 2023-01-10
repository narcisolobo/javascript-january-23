/* Map and Filter */

// Map method
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map(function (item) {
  return `<li>${item}</li>`;
});

const groceryContainer = document.querySelector("#groceryContainer");
// for (let i = 0; i < groceryList.length; i++) {
//   groceryContainer.innerHTML += groceryList[i];
// }

// console.log(groceryList);

// Filter method
const values = [1, 2, 3, 4, 5];
const evens = values.filter((val) => val % 2 === 0);
console.log(evens);

const oFoods = groceries
  .filter((item) => !item.includes("o"))
  .map((item) => `<li>${item}</li>`);

for (let i = 0; i < oFoods.length; i++) {
  groceryContainer.innerHTML += oFoods[i];
}

const oddCubes = values.filter((val) => val % 2 !== 0).map((val) => val ** 3);

console.log(oddCubes);