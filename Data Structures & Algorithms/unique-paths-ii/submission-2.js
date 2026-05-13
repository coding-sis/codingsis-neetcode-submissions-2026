class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        const currRow = Array(grid[0].length+1).fill(0);

        // compute row by row from the bottom rows (right to left) 
        for(let r = grid.length-1; r >= 0; r--){
            const prevRow = [...currRow];
            for(let c = grid[0].length-1; c >= 0; c--) {
                if (grid[r][c] === 1) {
                    currRow[c] = 0;
                } else if (r === grid.length-1 && c === grid[0].length-1) {
                    currRow[c] = 1;
                } else {
                    currRow[c] = prevRow[c] + currRow[c+1];
                }
            }
        }
        return currRow[0];
    }
}
