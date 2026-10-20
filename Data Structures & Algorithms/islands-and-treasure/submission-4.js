class Solution {
    /**
     * @param {number[][]} grid
     */
        islandsAndTreasure(grid) {
        // 1. bfs-prep: collect all the gate cells to bfs-traverse on them
        const queue = [];
        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if(grid[r][c] === 0) queue.push([r, c]);
            }
        }
        // 2. start the bfs
        this.bfs(grid, queue);
        return grid;
    }

    bfs (grid, queue) {
        for (let i = 0; i < queue.length; i++) {
            const [r, c] = queue[i];
            
            const val = grid[r][c];
            const neighbors = [[r-1, c], [r, c-1], [r, c+1], [r+1, c]];
            for (let [nR, nC] of neighbors) {
                const tmp = grid[nR] && grid[nR][nC] || -1;
                // If tmp can be updated with a smaller value, 
                // then 
                //   update its value and 
                //   put it to the queue to traverse its neighbors with better distance value
                if (tmp > 0 && tmp > val + 1) { 
                    grid[nR][nC] = val + 1;
                    queue.push([nR, nC]);
                }
            }
        }
    }
}
