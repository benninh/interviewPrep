/*
Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays, check whether they are similar.

Example

For A = [1, 2, 3] and B = [1, 2, 3], the output should be
areSimilar(A, B) = true.

The arrays are equal, no need to swap any elements.

For A = [1, 2, 3] and B = [2, 1, 3], the output should be
areSimilar(A, B) = true.

We can obtain B from A by swapping 2 and 1 in B.

For A = [1, 2, 2] and B = [2, 1, 1], the output should be
areSimilar(A, B) = false.

Any swap of any two elements either in A or in B won't make A and B equal.

Input/Output

[time limit] 4000ms (js)
[input] array.integer A

Array of integers.

Constraints:
3 ≤ A.length ≤ 105,
1 ≤ A[i] ≤ 1000.

[input] array.integer B

Array of integers of the same length as A.

Constraints:
B.length = A.length,
1 ≤ B[i] ≤ 1000.

[output] boolean

true if A and B are similar, false otherwise.
*/

function areSimilar(A, B) {
  if (!containsSameValues(A, B)) {
    return false;
  }

  if (arraysAreEqual(A,B)) {
    return true;
  }

  var temp = null;
  var count = 0;

  for (var i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      count++;
      if (count > 2) {
        return false;
      }
    }
  }

  return true;
}

function arraysAreEqual(A, B) {
  if (A.length !== B.length) {
    return false;
  }

  for (var i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      return false;
    }
  }

  return true;
}

function containsSameValues(A, B) {
  var aKeys = A.reduce(function(acc, ele) {
    acc[ele] = acc[ele] || 0;
    acc[ele]++;
    return acc;
  }, {});
  var bKeys = B.reduce(function(acc, ele) {
    acc[ele] = acc[ele] || 0;
    acc[ele]++;
    return acc;
  }, {});

  for (var key in aKeys) {
    if (!(aKeys[key] === bKeys[key]) || !!!bKeys[key]) {
      return false;
    }
  }

  return true;
}

var A = [2, 2, 3, 1, 1, 3, 4];
var B = [1, 2, 3, 1, 2, 4, 3];
console.log(areSimilar(A, B)); // false
var A = [2, 2, 3, 1, 1];
var B = [1, 2, 3, 1, 2];
console.log(areSimilar(A, B)); // true
