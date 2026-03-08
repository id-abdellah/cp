function isItMulipleOf5(number) {
  return number % 5 === 0
}

function isItMultipleOf3(number) {
  return number % 3 === 0
}

function multiplesOf3Or5(number) {
  let sum = 0
  for (let i = 1; i < number; i++) {
    if (isItMulipleOf5(i) || isItMultipleOf3(i)) sum += i
  };
  return sum
}
