class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] !== 0) continue;

                // explore grid from each treasure chest cell
                this.bfs(grid, [[r, c]], new Set());
            }
        }
        return grid;
    }

    bfs (grid, queue, visited) {
        // Iterate the bfs queue in order with the way how dequeuing would run.
        for (let i = 0; i < queue.length; i++) {
            const [r, c] = queue[i];
            const distToTC = grid[r][c];

            const sig = r + "," + c;
            
            // if a cell has been visited, skip
            if (visited.has(sig)) continue;

            visited.add(sig);
            const top = grid[r-1] && grid[r-1][c] || -1;
            const left = grid[r] && grid[r][c-1] || -1;
            const right = grid[r] && grid[r][c+1] || -1;
            const bottom = grid[r+1] && grid[r+1][c] || -1;
            if (top > 0) {
                grid[r-1][c] = Math.min(grid[r-1][c], distToTC + 1);
                queue.push([r-1, c])
            }
            if (left > 0) {
                grid[r][c-1] = Math.min(grid[r][c-1], distToTC + 1);
                queue.push([r, c-1])
            }
            if (right > 0) {
                grid[r][c+1] = Math.min(grid[r][c+1], distToTC + 1);
                queue.push([r, c+1])
            }
            if (bottom > 0) {
                grid[r+1][c] = Math.min(grid[r+1][c], distToTC + 1);
                queue.push([r+1, c])
            }
        }
    }
}