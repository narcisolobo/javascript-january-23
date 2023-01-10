import isEqual from "lodash/isEqual.js";
import selectionSort from "./w1-sorts/w1d2-selectionSort.js";

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('******** BEGIN SELECTION SORT ********')

const result1 = selectionSort(numsOrdered);
console.log(isEqual(result1, expected));

const result2 = selectionSort(numsRandomOrder);
console.log(isEqual(result2, expected));

const result3 = selectionSort(numsReversed);
console.log(isEqual(result3, expected));

console.log('******** END SELECTION SORT ********')
