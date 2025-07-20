import { it, expect } from "vitest";

function containsDuplicate(nums: number[]): boolean {
    return [...new Set(nums)].length !== nums.length;
};


if (import.meta.vitest) {
    it("should returns false", () => {
        expect(containsDuplicate([1, 2, 3, 4, 5])).toBe(false);
    });

    it("should return true", () => {
        expect(containsDuplicate([1, 2, 3, 4, 5, 5])).toBe(true);
    })
}