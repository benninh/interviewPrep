// Given a string, find out if its characters can be rearranged to form a palindrome.

// Example

// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

// Input/Output

// [time limit] 4000ms (js)
// [input] string inputString

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 4 ≤ inputString.length ≤ 50.

// [output] boolean

// true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.

function palindromeRearranging(inputString) {
  var charCounts = inputString.split('').reduce(function(acc, letter) {
    acc[letter] = acc[letter] || 0;
    acc[letter]++;
    return acc;
  }, {});

  var chars = Object.keys(charCounts);
  var counter = 0;
  return chars.reduce(function(acc, key) {
    if (!acc) {
      return acc;
    }


    if (charCounts[key] % 2 === 1) {
      counter++;
      if (counter > 1) {
        return false;
      }
    }
    
    return acc;
  }, true);
}

var inputString;
inputString = "aabb";
console.log(palindromeRearranging(inputString)); // "abba" true
inputString = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc"; 
console.log(palindromeRearranging(inputString)); // false
inputString = "abbcabb";
console.log(palindromeRearranging(inputString)); // "abbcbba" true
inputString = "zyyzzzzz";
console.log(palindromeRearranging(inputString)); // "zzzyyzzz" true

// race car
// r a c e
// 2 2 2 1