/*
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

Input/Output

[time limit] 4000ms (js)
[input] string s1

A string consisting of lowercase latin letters a-z.

Constraints:
3 ≤ s1.length ≤ 15.

[input] string s2

A string consisting of lowercase latin letters a-z.

Constraints:
4 ≤ s2.length ≤ 15.

[output] integer
*/

function commonCharacterCount(s1, s2) {
  var counter = 0;
  var s1chars = s1.split('').reduce(function(acc, letter) {
    acc[letter] = acc[letter] || 0;
    acc[letter]++;
    return acc;
  }, {});
  var s2chars = s2.split('').reduce(function(acc, letter) {
    acc[letter] = acc[letter] || 0;
    acc[letter]++;
    return acc;
  }, {});

  for (var key in s1chars) {
    if (s2chars[key]) {
      if (s2chars[key] < s1chars[key]) {
        counter += s2chars[key];
      } else if (s2chars[key] >= s1chars[key]) {
        counter += s1chars[key];
      }
    }
  }

  return counter;
}


var s1 = "aabcc";
var s2 = "adcaa";
console.log(commonCharacterCount(s1, s2) === 3);