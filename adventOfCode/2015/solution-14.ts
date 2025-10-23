import { readFile } from "node:fs/promises";
import path from "node:path";



let input = (await readFile(path.join(import.meta.dirname, "./puzzleInput-14.txt"), "utf-8")).split("\r\n")

type ReindeerStateType = {
    speed: number;
    flyTime: number;
    restTime: number;
    distance: number;
    points: number;
    isFlying: boolean;
    timeInState: number
}

// console.log(input)


class Solution {

    private getData() {
        const map = new Map<string, { canFly: number, in: number, rest: number }>();
        for (const str of input) {
            const splited = str.split(" ");
            const name = splited[0];
            const obj = {
                canFly: +splited[3],
                in: +splited[6],
                rest: +splited[13]
            }
            map.set(name, obj)
        }
        return map;
    }

    private calculateDistance(canFly: number, inTime: number, rest: number) {
        let timeLeft = 2503;
        let temp = 0; // flown time
        while (timeLeft > 0) {
            const flyingNow = Math.min(inTime, timeLeft);
            timeLeft -= flyingNow;
            temp += flyingNow;
            timeLeft -= rest;
        }
        return temp * canFly
    }

    partOne() {
        let result = 0;
        const data = this.getData();
        data.keys().forEach(reindeer => {
            const info = data.get(reindeer);
            const distance = this.calculateDistance(info.canFly, info.in, info.rest);
            result = Math.max(result, distance)
        })
        return result
    }


    private getReindeerStats() {
        const map: Record<string, ReindeerStateType> = {};
        const prevData = this.getData();
        prevData.keys().forEach(key => {
            map[key] = {
                speed: prevData.get(key).canFly,
                flyTime: prevData.get(key).in,
                restTime: prevData.get(key).rest,
                distance: 0,
                isFlying: true,
                points: 0,
                timeInState: 0
            }
        });
        return map
    }

    private getLeadsNames(obj: Record<string, ReindeerStateType>) {
        let result: string[] = [];
        let max: number = Math.max(...Object.values(obj).map(o => o.distance));
        for (const key in obj) {
            if (obj[key].distance === max) result.push(key)
        }
        return result;
    }


    partTwo() {
        let ss = this.getReindeerStats();

        for (let i = 1; i <= 2503; i++) {
            Object.values(ss).forEach(stat => {
                if (stat.isFlying) {
                    stat.distance += stat.speed;
                    stat.timeInState += 1;
                    if (stat.timeInState === stat.flyTime) {
                        stat.isFlying = false;
                        stat.timeInState = 0
                    }
                } else {
                    stat.timeInState += 1
                    if (stat.timeInState === stat.restTime) {
                        stat.isFlying = true;
                        stat.timeInState = 0
                    }
                }
            })

            this.getLeadsNames(ss).forEach(leader => {
                ss[leader].points += 1
            })
        }

        const maxPoint = Math.max(...Object.values(ss).map(s => s.points))
        return maxPoint
    }

}


const solution = new Solution();

console.log(solution.partOne())
console.log(solution.partTwo())