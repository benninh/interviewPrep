/*
After becoming famous, CodeBots decided to move to a new building and live together. The building is represented by a rectangular matrix of rooms, each cell containing an integer - the price of the room. Some rooms are free (their cost is 0), but that's probably because they are haunted, so all the bots are afraid of them. That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots.

Help the bots calculate the total price of all the rooms that are suitable for them.

Example

For

matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]]
the output should be
matrixElementsSum(matrix) = 9.

Here's the rooms matrix with unsuitable rooms marked with 'x':

[[x, 1, 1, 2], 
 [x, 5, x, x], 
 [x, x, x, x]]
Thus, the answer is 1 + 5 + 1 + 2 = 9.

Input/Output

[time limit] 4000ms (js)
[input] array.array.integer matrix

2-dimensional array of integers representing a rectangular matrix of the building.

Constraints:
1 ≤ matrix.length ≤ 5,
1 ≤ matrix[i].length ≤ 5,
0 ≤ matrix[i][j] ≤ 10.

[output] integer
*/

function matrixElementsSum(matrix) {
  result = 0;
  var zeroAbove = false;

  matrix.forEach(function(hall, hallIndex) {
    hall.forEach(function(room, roomIndex) {
      if (hallIndex === 0) {
        result += room;
      } else {
        for (var i = 0; i < hallIndex; i++) {
          if (matrix[i][roomIndex] === 0) {
            zeroAbove = true;
          }
        }
        if (!zeroAbove) {
          result += room;
        }
        zeroAbove = false;
      }
    });
  });

  return result;
}

var matrix = [
              [1,1,1,0], 
              [0,5,0,1], 
              [2,1,3,10]
             ];

console.log(matrixElementsSum(matrix)); // 9