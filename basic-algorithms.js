// ------ Factorialize a Number ------------
/* Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of
all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120 */

function factorialize(num) {
  if (!num) {
    return 1;
  }

  if (num === 1) {
    return num;
  }

  var result = factorialize(num-1) * num;
  return result;
}

factorialize(5);

// ----- Chunky Monkey  ------------------------
/* Write a function that splits an array (first argument) into groups the length 
of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var outArray = [];
  for (var i = 0; i + size <= arr.length; i += size) {
    //console.log(i);
    //console.log(arr.slice(i, i + size));
    outArray.push(arr.slice(i, i + size));
  }
  return outArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);