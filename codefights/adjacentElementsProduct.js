/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.

Input/Output

[time limit] 4000ms (js)
[input] array.integer inputArray

An array of integers containing at least two elements.

Constraints:
2 ≤ inputArray.length ≤ 10,
-1000 ≤ inputArray[i] ≤ 1000.

[output] integer

The largest product of adjacent elements.
*/

function adjacentElementsProduct(inputArray) {
    productArray = inputArray.map(function(number, index) {
        if (!!inputArray[index + 1]){
            return number * inputArray[index + 1];
        } else {
          return 0;
        }
    });
    console.log(productArray);
    
    return Math.max(...productArray);
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
