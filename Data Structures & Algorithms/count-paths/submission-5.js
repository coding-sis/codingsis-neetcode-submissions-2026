class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(rows, cols, r=0, c=0, memo) {
        // init memo if not defined
        if (!memo) memo = Array.from({ length: rows }, () => Array(cols).fill(0));

        if(r === rows || c === cols) return 0;
        if(memo[r][c] > 0) return memo[r][c];
        
        // base case: 1 (cells in the right most col and the botom row)
        if(r === rows - 1 || c === cols-1) return 1;

        memo[r][c] = this.uniquePaths(rows, cols, r+1, c, memo) 
                   + this.uniquePaths(rows, cols, r, c+1, memo);

        return memo[r][c];
    }
}
