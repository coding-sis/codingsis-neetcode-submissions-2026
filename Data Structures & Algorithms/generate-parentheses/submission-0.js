class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        if (n <= 0) return []

        const res = [];
        this.collect(n, res);
        return res;
    }

    collect(n, res, collected = '', open = 0, close = 0) {
        // Base case: all the parentheses are used up
        if (open === close && open === n) {  
            res.push(collected);
            return;
        }

        // two possible paths:
        // - open a new pair
        // - close a pair
        if (open < n) this.collect(n, res, collected+'(', open+1, close);
        if (close < open) this.collect(n, res, collected+')', open, close+1);
    }
}
