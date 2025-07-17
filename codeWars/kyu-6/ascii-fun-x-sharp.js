/*
You will get an odd integer n (>= 3) and your task is to draw an X. Each line is separated with \n.

Use the following characters: ■ □ For Ruby, Crystal and PHP: whitespace and o

    Examples

                                       ■□□□■
                ■□■                    □■□■□
    x(3) =>     □■□            x(5) => □□■□□
                ■□■                    □■□■□
                                       ■□□□■

*/
function x(n) {
    let fullSquare = "■";
    let emptySquare = "□";
    let mid = Math.ceil(n / 2);

    // part 1
    let board = [];
    for (let i = 0; i < n; i++) {
        board.push(new Array(n))
    }
    board = board.map(arr => arr.fill(emptySquare))

    // part 2
    let front = 0;
    let back = 1;
    for (let i = 0; i < mid - 1; i++) {
        board[i][front] = fullSquare;
        board[i][board[i].length - back] = fullSquare;
        front = front + 1;
        back = back + 1;
    }

    // part 3
    board[mid - 1] = [...emptySquare.repeat(Math.floor(n / 2)), fullSquare, ...emptySquare.repeat(Math.floor(n / 2))]

    // part 4
    front = Math.floor(n / 2) - 1;
    back = mid;
    for (let i = mid; i < board.length; i++) {
        board[i][front] = fullSquare;
        board[i][back] = fullSquare;
        front -= 1;
        back += 1;
    }

    // part 5
    let finalStep = "";
    for (let i = 0; i < board.length; i++) {
        finalStep += `${board[i].join(" ")}${i === board.length - 1 ? "" : "\n"}`
    }
    return finalStep
}


console.log(x(3))
console.log(x(5))
console.log(x(11))