class Solution {
        /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const initRottenCells = this.init(grid);
        // init check - in case no cells with 2, return -1
        // if(!initRottenCells.length) return -1;

        // start polluting connected cells using BFS
        for(let cellIndex of initRottenCells) {
            // make sure the curr init cell is starting with 0-depth.
            this.markRotten(grid, cellIndex[0], cellIndex[1], 0);
            // travel from this init cell
            this.rotCells(grid, cellIndex[0], cellIndex[1]);
        }

        let maxDepth = 0;
        // Check if any 1s left, and 
        // If not, count the max depth number in the grid
        for(let r = 0; r < grid.length; r++){
            for(let c = 0; c < grid[r].length; c++) {
                const [status, depth] = grid[r][c];
                if (status === 1) return -1;
                maxDepth = Math.max(maxDepth, depth);
            }
        }
        return maxDepth;
    }

    // start polutting grid from a cell grid[r][c]
    rotCells(grid, r, c) {
        if(grid[r][c][0] !== 2) return;

        const toVisit = [[r, c, 0]]; 
        const visited = new Set();
        while (toVisit.length) {
            // BFS approach
            const [r, c, depth] = toVisit.shift();

            const visitCheck = r + ',' + c;
            if (visited.has(visitCheck)) continue;
            visited.add(visitCheck);

            // above
            this.markRotten(grid, r-1, c, depth+1, toVisit);
            // left
            this.markRotten(grid, r, c-1, depth+1, toVisit);
            // right
            this.markRotten(grid, r, c+1, depth+1, toVisit);    
            // below
            this.markRotten(grid, r+1, c, depth+1, toVisit);
        }

    }

    // if grid[r][c] is not empty, and its currDepth > given depth, 
    // update the grid with the smaller depth value
    markRotten(grid, r, c, depth, toVisit) {
        if(!grid[r] || !grid[r][c]) return;
        const cell = grid[r][c];
        if(cell[0] === 0 || cell[1] <= depth) return;

        // mark the status to 2, and 
        // keep the min depth between one in the cell and given input depth.
        grid[r][c] = [2, depth];
        toVisit.push([r, c, depth]);
    }

    // collect rotten cells in the given init grid array
    // each cell is in a format: [ 0 | 1 | 2 , INFINITY: min depth from connnected rotten cell]
    init(grid) {
        let rottenCells = [];
        for (let r = 0; r < grid.length; r++) {
            for(let c = 0; c < grid[r].length; c++) {
                const val = grid[r][c];

                if(val === 1) grid[r][c] = [val, Number.POSITIVE_INFINITY];
                else grid[r][c] = [val, 0];

                if(val === 2) rottenCells.push([r, c]);
            }
        }

        return rottenCells;
    }
}
