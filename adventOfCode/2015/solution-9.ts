import { readFile } from "node:fs/promises";
import path from "node:path";


const puzzleInput = (await readFile(path.join(import.meta.dirname, "puzzleInput-9.txt"), "utf-8")).split("\r\n");