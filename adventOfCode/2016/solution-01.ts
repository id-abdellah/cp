import { readFile } from "node:fs/promises";
import path from "node:path";

let input = await readFile(
   path.join(import.meta.dirname, "./input-01.txt"),
   "utf-8",
);

type Position = {
   x: number;
   y: number;
};

class Solution {
   private _prepareInput() {
      return input.split(", ");
   }

   private _getNextDirIndex(currIndex: number, turn: string) {
      const t = turn === "R" ? 1 : -1;
      return (currIndex + t + 4) % 4;
   }

   private _updatePosition(
      position: Position,
      nextFacing: string,
      steps: number,
   ) {
      return {
         N: () => {
            position.y += steps;
         },
         S: () => {
            position.y -= steps;
         },
         E: () => {
            position.x += steps;
         },
         W: () => {
            position.x -= steps;
         },
      }[nextFacing]();
   }

   private _calculateBlocks(position: Position) {
      return Math.abs(position.x) + Math.abs(position.y);
   }

   partOne() {
      const instructions: string[] = this._prepareInput();
      let position: Position = {
         x: 0,
         y: 0,
      };
      const directions = ["N", "E", "S", "W"];
      let facing = "N";
      let dirIndex = 0;

      for (let i = 0; i < instructions.length; i++) {
         let turnTo = instructions[i].slice(0, 1);
         let steps = +instructions[i].slice(1);

         let nextFacing = directions[this._getNextDirIndex(dirIndex, turnTo)];

         this._updatePosition(position, nextFacing, steps);

         facing = nextFacing;
         dirIndex = directions.indexOf(facing);
      }

      return this._calculateBlocks(position);
   }

   partTwo() {
      const instructions: string[] = this._prepareInput();
      let position: Position = {
         x: 0,
         y: 0,
      };
      const directions = ["N", "E", "S", "W"];
      let dirIndex = 0;

      let visited = new Set<string>();
      visited.add("0,0");

      for (const instruction of instructions) {
         const turn = instruction[0];
         const steps = Number(instruction.slice(1));

         dirIndex = this._getNextDirIndex(dirIndex, turn);
         const facing = directions[dirIndex];

         for (let i = 0; i < steps; i++) {
            if (facing === "N") position.y++;
            if (facing === "S") position.y--;
            if (facing === "E") position.x++;
            if (facing === "W") position.x--;

            const key = `${position.x},${position.y}`;
            if (visited.has(key)) {
               return Math.abs(position.x) + Math.abs(position.y);
            }
            visited.add(key);
         }
      }

      return null;
   }
}

console.log(new Solution().partOne()); // 146 block
console.log(new Solution().partTwo()); // 131 block
