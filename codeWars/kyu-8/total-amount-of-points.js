function points(games) {
  let result = 0;

  for (let i = 0; i < games.length; i++) {
    let x = +games[i].split(':')[0];
    let y = +games[i].split(':')[1];
    if (x > y) {
      result += 3;
    } else if (x < y) {
      result += 0;
    } else if (x == y) {
      result += 1;
    }
  }
  return result;
}
// on format ["x:y"; "x:y"; ...]
// x is ourTeam  &&  y is oppenents Team

// assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
// assert.strictEqual(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10);
// assert.strictEqual(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0);
// assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);
// assert.strictEqual(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , 12);
