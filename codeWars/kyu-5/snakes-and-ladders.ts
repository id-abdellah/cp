// https://www.codewars.com/kata/587136ba2eefcb92a9000027/typescript

type Events = Record<"snakes" | "ladders", Record<number, number>>

type GameState = {
    turn: "1" | "2",
    whoWon?: GameState["turn"]
    1: number
    2: number
}

class SnakesLadders {
    private events: Events
    private gameState: GameState

    constructor() {
        this.events = {
            snakes: {
                99: 80, 95: 75, 92: 88, 89: 68, 74: 53, 64: 60, 62: 19, 49: 11, 46: 25, 16: 6,
            },
            ladders: {
                2: 38, 7: 14, 8: 31, 15: 26, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 78: 98, 87: 94
            }
        }
        this.gameState = {
            turn: "1",
            "1": 0,
            "2": 0,
        }
    }

    private switchTurn(): void {
        const currentPlayer = this.gameState.turn;
        this.gameState.turn = currentPlayer === "1" ? "2" : "1";
    }

    public play(die1: number, die2: number): string {
        if (this.gameState.whoWon) return "Game over!"
        const PLAYER_TURN = this.gameState.turn;
        const moves: number = die1 + die2;

        this.gameState[PLAYER_TURN] += moves

        if (this.gameState[PLAYER_TURN] === 100) {
            this.gameState.whoWon = PLAYER_TURN
            return `Player ${this.gameState.whoWon} Wins!`
        }

        if (this.gameState[PLAYER_TURN] > 100) {
            const overflowAmount = this.gameState[PLAYER_TURN] - 100
            this.gameState[PLAYER_TURN] = 100 - overflowAmount
        }

        if (this.gameState[PLAYER_TURN] in this.events.ladders) {
            this.gameState[PLAYER_TURN] = this.events.ladders[this.gameState[PLAYER_TURN]]
        }

        if (this.gameState[PLAYER_TURN] in this.events.snakes) {
            this.gameState[PLAYER_TURN] = this.events.snakes[this.gameState[PLAYER_TURN]]
        }

        const returnedCoords = `Player ${PLAYER_TURN} is on square ${this.gameState[PLAYER_TURN]}`

        if (die1 != die2) this.switchTurn()

        return returnedCoords
    }
}