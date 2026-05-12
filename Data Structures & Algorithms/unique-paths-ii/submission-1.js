class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid, r = 0, c = 0, memo, ROWS = grid.length, COLS = grid[0].length) {
        if (!memo) {
            // init memo, if not defined
            memo = Array.from({ length: ROWS+1 }, () => Array(COLS+1).fill(-1));
            memo[ROWS-1][COLS-1] = 1; // the bottom-right base case
        }
    
        if(r >= ROWS || c >= COLS) return 0;
        if(grid[r][c] === 1) return 0; // obstacle
        if(memo[r][c] > -1) return memo[r][c];

        memo [r][c] = this.uniquePathsWithObstacles(grid, r+1, c, memo)
             + this.uniquePathsWithObstacles(grid, r, c+1, memo);
        return memo[r][c];
    }
}
