/*
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.
Input/Output

[time limit] 4000ms (js)
[input] integer n

A ticket number represented as a positive integer with an even number of digits.

Constraints:
10 ≤ n < 106.

[output] boolean

true if n is a lucky ticket number, false otherwise.
*/

function isLucky(n) {
  var numString = n.toString();

  if (numString.length % 2 === 1) {
    return false;
  }

  var halfIndex = (numString.length / 2);
  var left = numString.substring(0, halfIndex);
  var right = numString.substring(halfIndex);
  
  var leftSum = left.split('').reduce(function(acc, num) {
    acc += Number(num);
    return acc;
  }, 0);
  var rightSum = right.split('').reduce(function(acc, num) {
    acc += Number(num);
    return acc;
  }, 0);

  return leftSum === rightSum ? true : false;
}

var n;
n = 239017
console.log(isLucky(n));
n = 1230
console.log(isLucky(n));