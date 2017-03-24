/*
You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets. It is guaranteed that the parentheses in s form a regular bracket sequence.

Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair. The results string should not contain any parentheses.

Example

For string s = "a(bc)de", the output should be
reverseParentheses(s) = "acbde".

Input/Output

[time limit] 4000ms (js)
[input] string s

A string consisting of English letters, punctuation marks, whitespace characters and brackets. It is guaranteed that parentheses form a regular bracket sequence.

Constraints:
5 ≤ s.length ≤ 55.

[output] string
*/

function reverseParentheses(s) {
    if (s.includes('(')){
        return reverseParentheses(reverseOnce(s));
    } else {     
        return s;
    }
}

function reverseOnce(s){
    var regexp = /\(([^()]*)\)/i;
    var subStr = regexp.exec(s)[1];
    console.log(regexp.exec(s))
    // console.log(subStr);
    subStr = subStr.split('').reverse().join('');
    return s.replace(regexp, subStr)
}

// function reverseParentheses(s) {
//   var result = s;
//   var stringToReverse = '';
//   var parenFound = false;
//   // var i = 0;
//   // var j = 0;

//   for (var i = 0; i < s.length; i++) {
//     if (s[i] === '(' || s[i] === ')') {
//       parenFound = true;
//       break;
//     }
//   }
  
//   if (i < s.length - 1) {
//     for (var j = s.length - 1; j > 0; j--) {
//       if (s[j] === ')' || s[j] === '(') {
//         break;
//       }
//     }
//   }
  
//   if (parenFound) {
//     result = s.substring(0, i) + reverseString(s.substring(i+1, j)) + s.substring(j+1);
//     if (result.includes('(')) {
//       result = reverseParentheses(result);
//     }
//   }


//   return result;
// }


// function reverseString(s) {
//   return s.split('').reverse().join('');
// }

var s;
// s = "a(bc)de";
// console.log(reverseParentheses(s));
s = "a(bcdefghijkl(mno)p)q";
console.log(reverseParentheses(s)); // => apmnolkjihgfedcbq
// s = "don't reverse anything";
// console.log(reverseParentheses(s)); // => don't reverse anything
// s = "abc(cba)ab(bac)c";
// console.log(reverseParentheses(s)); // => abcabcabcabc