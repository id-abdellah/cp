/**
 * my solution idea is to sort every string in the list. each string in the list will be replace
 * by object containing original string, and a sorted one.
 * then grouping matched sorted list together in an object.
 * then returning the values of that obejct :D
 */


class Solution {
    static groupAnagrams(strs: string[]): string[][] {
        const sorted = strs.map(s => ({ sorted: s.split("").sort().join(""), original: s }));
        let grouped = sorted.reduce((acc, curr) => {
            const { sorted, original } = curr;
            if (!(sorted in acc)) acc[sorted] = [];
            acc[sorted].push(original)
            return acc
        }, {})
        return Object.values(grouped)
    }
}



if (import.meta.vitest) {
    const { it, expect } = await import("vitest")

    it("should group anagrams", () => {
        const result = Solution.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
        expect(result).toEqual(
            expect.arrayContaining([
                expect.arrayContaining(["bat"]),
                expect.arrayContaining(["nat", "tan"]),
                expect.arrayContaining(["ate", "eat", "tea"]),
            ])
        );
    })
}