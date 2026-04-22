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
    maxAreaOfIslandOld(grid) {
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

        maxAreaOfIsland(grid) {
        let maxSize = 0;
        const visited = new Set();
        for(let r = 0; r < grid.length; r++) {
            for(let c = 0; c < grid[0].length; c++) {
                const cellInitials = r + "," + c;
                if (visited.has(cellInitials) || grid[r][c] === 0) continue;

                // calculate a total land size starting from grid[r][c]
                const size = this.calculateSize(grid, r, c, visited);
                if (size > maxSize) maxSize = size;
            }
        }
        return maxSize;
    }

    calculateSize(grid, r, c, visited) {
        const cellInitials = r + "," + c;
        if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || 
            visited.has(cellInitials) ||
            grid[r][c] === 0 
        ) return 0;

        let size = 1;
        visited.add(cellInitials);

        size += this.calculateSize(grid, r+1, c, visited, size);
        size += this.calculateSize(grid, r-1, c, visited, size);
        size += this.calculateSize(grid, r, c+1, visited, size);
        size += this.calculateSize(grid, r, c-1, visited, size);

        return size;
    }
}
