class Solution {
        constructor() {
        this.map = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wxyz"
        }
    }
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const res = [];
        this.backtrack(digits, res);
        return res;
    }

    backtrack(digits, res, i = 0, collected = "") {
        if (i === digits.length) {
            if(collected !== '') res.push(collected);
            return;
        }
        
        const chars = this.map[digits[i]];
        for (let j = 0; j < chars.length; j++) {
            // explore the next layer (i+1) with each char in map[i];
            this.backtrack(digits, res, i+1, collected + chars[j]);
        }
    }
}
