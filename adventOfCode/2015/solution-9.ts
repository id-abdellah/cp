import { WeightedGraph } from "../../00 - data/12 - WeightedGraph.ts";
import { readFile } from "node:fs/promises";
import path from "node:path";


type PuzzleEdge = {
    from: string,
    to: string,
    weight: number
}


const puzzleInput = (await readFile(path.join(import.meta.dirname, "puzzleInput-9.txt"), "utf-8")).split("\r\n");

class Solution {

    private _getVerticies() {
        const verticies = new Set<string>();
        puzzleInput.forEach(s => {
            const splited = s.split(" ");
            verticies.add(splited[0])
            verticies.add(splited[2])
        })
        return verticies
    }

    private _getEdges() {
        const edges: PuzzleEdge[] = [];

        puzzleInput.forEach(s => {
            const splited = s.split(" ");
            const e: PuzzleEdge = {
                from: splited[0],
                to: splited[2],
                weight: Number(splited[4])
            }
            edges.push(e)
        })

        return edges
    }

    private _permutations(arr: string[]) {
        if (arr.length <= 1) return [arr];

        const result: string[][] = [];
        for (let i = 0; i < arr.length; i++) {
            const current = arr[i];
            const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
            const perms = this._permutations(remaining);
            for (const p of perms) {
                result.push([current, ...p]);
            }
        }
        return result;
    }

    partOne() {
        const g = new WeightedGraph();

        this._getVerticies().forEach(vertex => g.addVertex(vertex))

        this._getEdges().forEach(edge => {
            g.addEdge(edge.from, edge.to, edge.weight)
        })

        const permutations = this._permutations([...this._getVerticies()])

        let shortest = Infinity;

        for (const path of permutations) {
            let temp = 0;
            for (let i = 0; i < path.length - 1; i++) {
                let from = path[i];
                let to = path[i + 1];
                let distance = g.dijkstra(from, to);
                temp += distance.distance;
            }
            shortest = Math.min(shortest, temp);
        }

        return shortest
    }

    partTwo() {
        const g = new WeightedGraph();

        this._getVerticies().forEach(vertex => g.addVertex(vertex))

        this._getEdges().forEach(edge => {
            g.addEdge(edge.from, edge.to, edge.weight)
        })

        const permutations = this._permutations([...this._getVerticies()])

        let longest = 0;

        for (const path of permutations) {
            let temp = 0;
            for (let i = 0; i < path.length - 1; i++) {
                let from = path[i];
                let to = path[i + 1];
                const v = g.adjacencyList[from];
                const toIndex = v.findIndex(e => e.node === to);
                temp += v[toIndex].weight;
            }
            longest = Math.max(temp, longest)
        }

        return longest
    }

}


const solution = new Solution();

console.log("shortest distance", solution.partOne())
console.log("longest distance", solution.partTwo())