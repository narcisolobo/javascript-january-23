/* 
The Fibonacci sequence starts with 0, and 1.
Every number after is the sum two previous numbers
added together.

[0, 1, 1, 2, 3, 5, 8, 13, 21]
*/


/*
Create a function that, given an index, returns
the Fibonacci number at that index.
*/

function rFib(idx) {
  if (idx < 2) {
    return idx;
  }
  return rFib(idx - 1) + rFib(idx - 2);
}