/* =========================== Swap values of arrays (arr with two value) =========================== */
function swapValues(arr) {
  let tempValue = arr[0];
  arr[0] = arr[1];
  arr[1] = tempValue;
  return arr;
  //   return arr.reverse()
}
console.log(swapValues(['a', 'b'])); // [b, a]
console.log(swapValues([1, 9])); // [9, 1]





/* =========================== drink about =========================== */
function peopleWithAgeDrink(old) {
  if (old < 14) {
    return `drink toddy`;
  } else if (old >= 14 && old < 18) {
    return `drink coke`;
  } else if (old >= 18 && old < 21) {
    return `drink beer`;
  } else if (old >= 21) {
    return `drink whisky`;
  }
}
console.log(peopleWithAgeDrink(17)); // drink coke
console.log(peopleWithAgeDrink(22)); // drink whisky
console.log(peopleWithAgeDrink(8)); // drink toddy





/* =========================== is he gonna survive =========================== */

/*
  instructions:
  A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
*/

function hero(bullets, dragons) {
  return dragons * 2 <= bullets;
}
console.log(hero(10, 5)); // true
console.log(hero(100, 40)); // true
console.log(hero(0, 1)); // false
