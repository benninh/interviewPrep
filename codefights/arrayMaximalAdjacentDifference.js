/*
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
arrayMaximalAdjacentDifference(inputArray) = 3.

Input/Output

[time limit] 4000ms (js)
[input] array.integer inputArray

Guaranteed constraints:
3 ≤ inputArray.length ≤ 10,
-15 ≤ inputArray[i] ≤ 15.

[output] integer

The maximal absolute difference.
*/

function arrayMaximalAdjacentDifference(inputArray) {
  return inputArray.reduce(function(acc, number, index) {
    if (inputArray[index + 1] === undefined) {
      return acc;
    }
    return Math.abs(number - inputArray[index + 1]) > acc ? Math.abs(number - inputArray[index + 1]) : acc;
  }, -Infinity);
}

var inputArray = [2, 4, 1, 0];
console.log(arrayMaximalAdjacentDifference(inputArray));