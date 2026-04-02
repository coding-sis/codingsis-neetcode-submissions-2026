class Solution {

    // DFS
    getIslandArea(grid, visitedCells) {
        let area = 0; // starts with 1 of the initial visitedCell from the caller
        while(visitedCells.length) {
            const [r, c] = visitedCells.pop();
            
            const cell = grid[r][c];
            const above = grid[r-1] && grid[r-1][c];
            const left = grid[r][c-1];
            const right = grid[r][c+1];
            const below = grid[r+1] && grid[r+1][c];

            if (cell === 1) {
                // cell itself
                area += 1;
                grid[r][c] = undefined;
            }

            if(above === 1) {
                area += 1;
                grid[r-1][c] = undefined;
                visitedCells.push([r-1, c]);
            }
            if(left === 1) {
                area += 1;
                grid[r][c-1] = undefined;
                visitedCells.push([r, c-1]);
            }

            if(right === 1) {
                area += 1;
                grid[r][c+1] = undefined;
                visitedCells.push([r, c+1]);
            }

            if(below === 1) {
                area += 1;
                grid[r+1][c] = undefined;
                visitedCells.push([r+1, c]);
            }
        }

        return area;
    }

    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;
        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[r].length; c++) {
                if (grid[r][c] === 1) {
                    let area = this.getIslandArea(grid, [[r, c]]);

                    maxArea = Math.max(maxArea, area);
                }
            }
        }
        return maxArea;
    }
}
