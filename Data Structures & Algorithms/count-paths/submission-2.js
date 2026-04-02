class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const grid = Array.from(new Array(m), () => []);

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                // first row
                if (i === 0) grid[0][j] = 1;
                // first col
                else if (j === 0) grid[i][0] = 1;
                // rest cells
                else grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
            }
        }

        return grid[m - 1][n - 1];
    }
}
