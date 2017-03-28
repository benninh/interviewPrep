/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

Input/Output

[time limit] 4000ms (js)
[input] array.string inputArray

A non-empty array.

Constraints:
1 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 10.

[output] array.string

Array of the longest strings, stored in the same order as in the inputArray.
*/

function allLongestStrings(inputArray) {
  var length = inputArray.reduce(function(acc, str) {
    if (str.length > acc) {
      acc = str.length;
    }
    return acc;
  }, 0);

  return inputArray.reduce(function(acc, str) {
    if (str.length === length) {
      acc.push(str);
    }
    return acc;
  }, []);
}

var inputArray = ["aba", "aa", "ad", "vcd", "aba"];
console.log(allLongestStrings(inputArray));


console.log('TEST');
console.log(JSON.parse("'<h1>hello</h1>'"));