import isEqual from "lodash/isEqual.js";
import insertionSort from "./w1-sorts/w1d3-insertionSort.js";

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('******** BEGIN INSERTION SORT ********')

const result1 = insertionSort(numsOrdered);
console.log(isEqual(result1, expected));

const result2 = insertionSort(numsRandomOrder);
console.log(isEqual(result2, expected));

const result3 = insertionSort(numsReversed);
console.log(isEqual(result3, expected));

console.log('******** END INSERTION SORT ********')
