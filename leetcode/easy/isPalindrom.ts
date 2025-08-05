
class Solution {

    private isAlphanumeric(l: string): boolean {
        const regex = /[a-zA-Z0-9]/;
        return regex.test(l);
    }

    public isPalindrom(str: string): boolean {
        let begin = 0, end = str.length - 1;

        while (begin < end) {
            while (begin < end && !this.isAlphanumeric(str[begin])) begin++;
            while (begin < end && !this.isAlphanumeric(str[end])) end--;
            if (str[begin].toLowerCase() !== str[end].toLowerCase()) return false;
            begin++;
            end--;
        }

        return true;
    }

}

const solution = new Solution();

console.log(solution.isPalindrom("A man, a plan, a canal: Panama"))
console.log(solution.isPalindrom("race a car"))
