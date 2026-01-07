import { X509Certificate } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path/win32";

const inputContent = (
   await readFile(
      path.join(import.meta.dirname, "./inputs/input-01.txt"),
      "utf-8",
   )
).trim();

class Solution {
   private rotations: string[];
   private startPoint: number;
   constructor() {
      this.rotations = inputContent.split("\r\n");
      this.startPoint = 50;
   }

   private _rotate(
      currentPoint: number,
      delta: number,
      min: number = 0,
      max: number = 99,
   ) {
      const range: number = max - min + 1;
      const newPoint: number =
         ((((currentPoint - min + delta) % range) + range) % range) + min;
      return newPoint;
   }

   public partOne() {
      let result = 0;
      for (const instruction of this.rotations) {
         let rotateTo = instruction[0];
         let delta: number = Number(instruction.slice(1));
         delta = rotateTo == "R" ? delta : -delta;
         this.startPoint = this._rotate(this.startPoint, delta);
         if (this.startPoint === 0) result += 1;
      }
      return result;
   }

   // private _countZeroHits(
   //    start: number,
   //    rotation: number,
   //    range = 100,
   // ): number {
   //    if (rotation > 0) {
   //       return (
   //          Math.floor((start + rotation) / range) - Math.floor(start / range)
   //       );
   //    }
   //    if (rotation < 0) {
   //       return (
   //          Math.floor(start / range) - Math.floor((start + rotation) / range)
   //       );
   //    }
   //    return 0;
   // }

   public partTwo() {
      this.startPoint = 50;
      let count = 0;
      for (const line of this.rotations) {
         const d = line[0];
         const rotation = Number(line.slice(1));
         for (let i = 0; i < rotation; i++) {
            if (d == "L") {
               this.startPoint = (this.startPoint - 1 + 100) % 100;
            } else if (d == "R") {
               this.startPoint = (this.startPoint + 1 + 100) % 100;
            }
            if (this.startPoint == 0) count += 1;
         }
      }
      return count;
   }
}

const solution = new Solution();

console.log(solution.partOne());
console.log(solution.partTwo());
