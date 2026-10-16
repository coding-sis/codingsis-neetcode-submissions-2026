class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] !== 0) continue;

                // explore grid from each treasure chest cell, where its value = 0
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
            // check 4 adjacent cells of [r, c] - top, left, right, bottom
            const neighbors = [[r-1, c], [r, c-1], [r, c+1], [r+1, c]];
            for(let j = 0; j < 4; j++) {
                const [nR, nC] = neighbors[j];
                const nV = grid[nR] && grid[nR][nC] || -1;
                if(nV > 0) {
                    grid[nR][nC] = Math.min(grid[nR][nC], distToTC + 1);
                    queue.push([nR, nC]);
                }
            }
        }
    }
}