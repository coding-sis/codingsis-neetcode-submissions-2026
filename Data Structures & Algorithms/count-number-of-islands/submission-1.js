class Solution {
/**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslandsOld(grid) {
        let count = 0;

        // loop until grid contains only 0s
        let [i, j] = this.findLandPoint(grid);
        while (i >= 0 && j >= 0) {
            // BFS from the landPoint cell to mark any connected 1s to 0
            const updated = this.visitConnectedCells(grid, [i, j]);

            // increase the count
            if(updated) count++;

            // find another land point
            [i, j] = this.findLandPoint(grid);
        }

        return count;
    }

    findLandPoint(grid) {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === '1') return [i, j];
            }
        }

        return [-1, -1];
    }

    // visit connected cells (where its value = 1) from the src cell in the grid using BFS
    // mark them 0
    visitConnectedCells(grid, src) {
        let updated = false;
        // collect all connectedland cells from the src and add them to the queue to start
        let [i, j] = src;
        const queue = [src, ...this.findConnectedLands(grid, i, j)];

        while (queue.length) {
            [i, j] = queue.pop();
            if (grid[i][j] === '1') {
                // mark the cell as 0
                grid[i][j] = '0'

                // add its land neighbors (having 1) to the queue
                queue.push(...this.findConnectedLands(grid, i, j));
                updated = true;
            }
        }

        return updated;
    }

    findConnectedLands(grid, i, j) {
        const queue = [];
        if (i - 1 >= 0 && grid[i - 1][j] === '1') queue.push([i - 1, j]);
        if (i + 1 < grid.length && grid[i + 1][j] === '1') queue.push([i + 1, j]);
        if (j - 1 >= 0 && grid[i][j - 1] === '1') queue.push([i, j - 1]);
        if (j + 1 < grid[i].length && grid[i][j + 1] === '1') queue.push([i, j + 1]);
        return queue;
    }

        /**
     * Given a 2D grid grid where '1' represents land and '0' represents water, 
     * count and return the number of islands.
     */
    numIslands(grid, visited=new Set()) {
        let count = 0;
        for(let r = 0; r < grid.length; r++) {
            for(let c = 0; c < grid[0].length; c++) {
                const cellInitials = r + "," + c;
                if (visited.has(cellInitials) || grid[r][c] === '0') continue;

                // as soon as a non-visited land cell is detected,
                // visit all the connected land cells
                this.visit(grid, r, c, visited)

                //console.log(visited);
                count += 1;
            }
        }

        return count;
    }

    visit (grid, r, c, visited) {
        const cellInitials = r + "," + c;
        if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || // index sanity check
            visited.has(cellInitials) || // check if a cell has been visited
            grid[r][c] === '0'  // check if not a land
        ) return;

        // mark the cell as visited
        visited.add(cellInitials); 

        // go check adjacent cells
        this.visit(grid, r+1, c, visited);
        this.visit(grid, r-1, c, visited);
        this.visit(grid, r, c+1, visited);
        this.visit(grid, r, c-1, visited);
    }
}
