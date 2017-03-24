/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
Input/Output

[time limit] 4000ms (js)
[input] array.string picture

A non-empty array of non-empty equal-length strings.

Constraints:
1 ≤ picture.length ≤ 5,
1 ≤ picture[i].length ≤ 5.

[output] array.string

The same matrix of characters, framed with a border of asterisks of width 1.
*/

function addBorder(picture) {
  var borderTopAndBottom = '';
  for (var i = 0; i < picture[0].length; i++) {
    borderTopAndBottom += '*';
  }
  if (borderTopAndBottom.length > 0) {
    borderTopAndBottom += '**';
  }

  var framedPicture = [];
  framedPicture.push(borderTopAndBottom);

  for (i = 0; i < picture.length; i++) {
    framedPicture.push('*' + picture[i] + '*');
  }
  framedPicture.push(borderTopAndBottom);

  return framedPicture;
}

var picture = ["abc",
               "ded"];
console.log(addBorder(picture));