const fibonacci = [0, 1, 1, 2, 3, 5, 8];

// Rest operator with destructuring.
const [a, b, c, ...fib] = fibonacci;
// console.log(fib);

// Rest operator with object:

const myGuitar = {
  make: "Fender",
  model: "Stratocaster",
  year: 1977,
  color: "red",
};

const { make, ...strat } = myGuitar;
// console.log(strat);
// console.log(myGuitar);

// Rest operator/property must be the last in the pattern.
// No trailing comma.

// Spread operator
const fibCopy = [...fibonacci];
// console.log(fibonacci);
// console.log(fibCopy);

// no referential equality
// console.log(fibonacci === fibCopy);

const guitarCopy = { ...myGuitar };
// console.log(guitarCopy);

const moreFib = [...fibonacci, 13, 21, 34];
// console.log(moreFib);


const paintJob = {
  ...myGuitar,
  color: 'blue',
  year: 1968,
};

console.log(paintJob);
