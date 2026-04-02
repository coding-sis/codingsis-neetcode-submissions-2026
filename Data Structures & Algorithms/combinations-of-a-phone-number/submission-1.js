class Solution {
    constructor() {
        this.letterMap = [
            [],
            [],
            ['a', 'b', 'c'],      // 2
            ['d', 'e', 'f'],      // 3
            ['g', 'h', 'i'],      // 4
            ['j', 'k', 'l'],      // 5
            ['m', 'n', 'o'],      // 6
            ['p', 'q', 'r', 's'], // 7
            ['t', 'u', 'v'],      // 8
            ['w', 'x', 'y', 'z']  // 9
        ];
    }
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits, currDigit = 0, comb = '', res = []) {
        if (currDigit === digits.length) {
            if (comb.length) res.push(comb);
            return res;
        }

        const letters = this.letterMap[digits[currDigit]];
        for (let j = 0; j < letters.length; j++) {
            // handled the computed value as string, no need to pop.
            this.letterCombinations(digits, currDigit + 1, comb + letters[j], res);
        }

        return res;
    }
}
