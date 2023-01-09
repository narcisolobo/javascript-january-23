/* const fibonacci = [0, 1, 1, 2, 3, 5, 8];
const [a, b, c] = fibonacci;

console.log(a, b, c); */

// Without destructuring syntax
/* var fibonacci = [0, 1, 1, 2, 3];
var a = fibonacci[0];
var b = fibonacci[1];
var c = fibonacci[2]; */

const myGuitar = {
  make: 'Fender',
  model: 'Stratocaster',
  year: 1977,
  color: 'red'
};
const { year, color } = myGuitar;

console.log(year, color);

let bowl = 'apples';
let bag = 'oranges';

[bowl, bag] = [bag, bowl];

console.log(bowl, bag)

function rickRoll() {
  return ['Never', 'gonna', 'give', 'you', 'up'];
}

const [one, gonna] = rickRoll();

console.log(a, b);