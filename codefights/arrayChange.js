// You are given an array of integers. On each move you are allowed to increase exactly 
// one of its element by one. Find the minimal number of moves required to obtain a strictly 
// increasing sequence from the input.

// Example

// For inputArray = [1, 1, 1], the output should be
// arrayChange(inputArray) = 3.

// Input/Output

// [time limit] 4000ms (js)
// [input] array.integer inputArray

// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 105,
// -105 ≤ inputArray[i] ≤ 105.

// [output] integer

// The minimal number of moves needed to obtain a strictly increasing sequence from inputArray.
// It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.

function arrayChange(inputArray) {
  var copy = Array.from(inputArray);

  return copy.reduce(function(acc, num, index) {
    if (num < copy[index + 1]) {
      return acc;
    } else {
      while (num >= copy[index + 1]) {
        copy[index + 1]++;
        acc++;
      }
      return acc;
    }
  }, 0);
}

var input;
input = [1, 1, 1];
console.log(arrayChange(input)); // 3
input = [-1000, 0, -2, 0];
console.log(arrayChange(input)); // 5
input = [2, 1, 10, 1];
console.log(arrayChange(input)); // 12
input = [2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15];
console.log(arrayChange(input)); // 13
