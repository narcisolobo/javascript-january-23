import isEqual from "lodash/isEqual.js";
import quickSort from "./w1d5-quickSort.js";

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const expected1 = [2, 3, 6, 7, 8, 11, 14];

const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

const nums3 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const expected3 = [2, 3, 3, 3, 6, 7, 8, 11, 14];

const nums4 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected4 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

const result1 = quickSort(nums1);
console.log(result1);
console.log(isEqual(result1, expected1));

const result2 = quickSort(nums2);
console.log(isEqual(result2, expected2));

const result3 = quickSort(nums3);
console.log(isEqual(result3, expected3));

const result4 = quickSort(nums4);
console.log(isEqual(result4, expected4));
