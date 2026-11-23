import { readFile } from "fs/promises";
import path from "path";

const rawInput: string = await readFile(
	path.join(import.meta.dirname, "input-09.txt"),
	"utf-8",
);

class Solution {
	constructor() { }

	public part1() { }

	/***************************************
	 * Part Two
	 ****************************************/

	public part2() { }
}

const solution = new Solution();

solution.part1();
solution.part2();
