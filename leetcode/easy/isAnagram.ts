import { it, expect } from "vitest"


export function isAnagram(s: string, t: string): boolean {
    while (s.length !== 0) {
        if (t.includes(s[0])) {
            t = t.replace(s[0], "");
        } else {
            return false;
        }
        s = s.slice(1);
    }
    return t.length === 0 && s.length === 0;
};


if (import.meta.vitest) {
    it("test case 1", () => {
        expect(isAnagram("anagram", "nagaram")).toBe(true)
    })
    it("test case 2", () => {
        expect(isAnagram("rat", "car")).toBe(false)
    })
    it("test case 3", () => {
        expect(isAnagram("iceman", "cinema")).toBe(true)
    })
    it("test case 4", () => {
        expect(isAnagram("ab", "a")).toBe(false)
    })
}