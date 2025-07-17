/* =============================== rock papaer scissors =============================== */
const rps = (p1, p2) => {
  const a = 'scissors';
  const b = 'paper';
  const c = 'rock';
  if (p1 === p2) {
    return `Draw!`;
  } else if (
    (p1 == a && p2 == b) ||
    (p1 == b && p2 == c) ||
    (p1 == c && p2 == a)
  ) {
    return `Player 1 won!`;
  } else if (
    (p2 == a && p1 == b) ||
    (p2 == b && p1 == c) ||
    (p2 == c && p1 == a)
  ) {
    return `Player 2 won!`;
  }
};
console.log(rps('scissors', 'paper')); // player 1 won!
console.log(rps('rock', 'paper')); // player 2 won!
console.log(rps('rock', 'rock')); // Draw!






/* =============================== jessy's secret message =============================== */
function greet(name) {
  return 'Hello, ' + (name == 'Johnny' ? 'my love' : name) + '!';
}
console.log(greet('David')); // Hello, David!
console.log(greet('Josep')); // Hello, Josep!
console.log(greet('Johnny')); // Hello, my Love!
