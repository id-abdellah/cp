/*
  .................................. Instructions .................................. 

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.


Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

*/


/* ______________Solution 1 */

function unkn(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(`${i + 1}: ${array[i]}`)
  }
  return newArr
}


/* _______________Solution 2 */
function unkn2(array) {
  return array.map((a, b) => { return `${b + 1}: ${a}` })
}



console.log(["a", "b", "c", "d", "e", "f"]); // [ "1: a", "2: b", "3: c", "4: d", "5: e", "6: f"]
