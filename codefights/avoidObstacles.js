/*
You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. 
You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

Example

For inputArray = [5, 3, 6, 7, 9], the output should be
avoidObstacles(inputArray) = 4.

Input/Output

[time limit] 4000ms (js)
[input] array.integer inputArray

Non-empty array of positive integers.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i] ≤ 40.

[output] integer

The desired length.
*/

function avoidObstacles(inputArray) {
  var obstacles = inputArray.reduce(function(acc, obstacle) {
    acc[obstacle] = 1;
    return acc;
  }, {})

  var lastObstacle = Math.max(...Object.keys(obstacles));
  var step = 1;
  var current = 0;

  while (current <= lastObstacle) {
    current += step;
    if (obstacles[current]) {
      current = 0;
      step++;
    }
  }

  return step;
}

var inputArray = [1, 4, 3, 2];
console.log(avoidObstacles(inputArray));
inputArray = [5, 3, 6, 7, 9];
console.log(avoidObstacles(inputArray));
