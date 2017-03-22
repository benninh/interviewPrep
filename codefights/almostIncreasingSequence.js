// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Example

// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false;

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

// Input/Output

// [time limit] 4000ms (js)
// [input] array.integer sequence

// Constraints:
// 2 ≤ sequence.length ≤ 105,
// -105 ≤ sequence[i] ≤ 105.

// [output] boolean

// Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.
function almostIncreasingSequence(sequence) {
  var current, next, previous;
  
  for (var i = 0; i < sequence.length; i++) {
    previous = -Infinity;
    // console.log('i: ', i);
    for (var j = 0; j < sequence.length; j++) {
      if (j === i) {
        previous = sequence[j - 1] || previous;
        continue;
      } else {

        current = sequence[j];
        next = sequence[j + 1];
        // console.log('current: ', current, ' ', 'next: ', next);
        if (next === undefined && current > previous) {
          return true;
        }
        // check left
        var nextEqualsSkip = (j+1 === i);
        if (current >= next && !nextEqualsSkip) {
          // console.log('here');
          break;
        } else if ((current <= previous || current >= next) && !nextEqualsSkip) {
          // check right
          break;
        } 

      }
    }
  }

  return false;
}


var sequence = [1, 3, 2, 1];
console.log(almostIncreasingSequence(sequence), ' should be false'); // false;
sequence = [1, 3, 2];
console.log(almostIncreasingSequence(sequence), ' should be true'); // true;
sequence = [1, 2, 3, 4, 3, 6];
console.log(almostIncreasingSequence(sequence), ' should be true'); // true;
sequence = [1, 4, 10, 4, 2];
console.log(almostIncreasingSequence(sequence), ' should be false'); // false;
sequence = [10, 1, 2, 3, 4, 5];
console.log(almostIncreasingSequence(sequence), ' should be true'); // true;
sequence = [1, 2, 3, 4, 99, 5, 6];
console.log(almostIncreasingSequence(sequence), ' should be true');
sequence = [1, 2, 1, 2];
console.log(almostIncreasingSequence(sequence), ' should be false'); // false;


//implementation that finishes 25/26 tests in codefights
/*
function almostIncreasingSequence(sequence) {
  var current, next, previous;
  
  for (var i = 0; i < sequence.length; i++) {
    var temp = sequence.slice();
    temp.splice(i, 1);
    if (checkIncreasing(temp)) {
      return true;
    }
  }

  return false;
}

function checkIncreasing(sequence) {
  for (var i = 0; i < sequence.length; i++) {
    if (sequence[i + 1] <= sequence[i]) {
      return false;
    }
  }
  return true;
}
*/

