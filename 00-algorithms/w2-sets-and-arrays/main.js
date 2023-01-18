import isEqual from "lodash/isEqual.js";
import orderedIntersection from "./w2d1-orderedIntersection.js";

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

const result1 = orderedIntersection(numsA1, numsB1);
console.log(isEqual(result1, expected1));

const result2 = orderedIntersection(numsA2, numsB2);
console.log(isEqual(result2, expected2));

const result3 = orderedIntersection(numsA3, numsB3);
console.log(isEqual(result3, expected3));