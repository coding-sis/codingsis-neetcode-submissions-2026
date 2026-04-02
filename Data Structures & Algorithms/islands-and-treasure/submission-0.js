class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        // loop thru the grid -
        // as a chest cell appears, traverse the grid using BFS from each chest cell
        for(let r = 0; r < grid.length; r++) {
            for(let c = 0; c < grid[r].length; c++) {
                if (grid[r][c] !== 0) continue;

                this.traverse(grid, r, c, 0); // start traversing grid from the treasure-chest cell
            }
        }

        return grid;
    }

    traverse (grid, row, col, distFromChest) {
        if(grid[row][col] !== 0) return; // make sure this function only starts with a treasure-chest cell

        const toVisit = [[row, col, 0]];
        const visited = new Set();
        while(toVisit.length) {
            const [r, c, distFromChest] = toVisit.shift();

            if (visited.has(r+','+c)) continue;
            visited.add(r+','+c);

            const above = grid[r-1] && grid[r-1][c];
            const left = grid[r][c - 1];
            const right = grid[r][c + 1];
            const below = grid[r+1] && grid[r+1][c];
            if (above && above > 0) {
                grid[r-1][c] = Math.min(above, distFromChest+1);
                toVisit.push([r-1, c, distFromChest+1]);
            }

            if (left && left > 0) {
                grid[r][c-1] = Math.min(left, distFromChest+1);
                toVisit.push([r, c-1, distFromChest+1]);
            }

            if (right && right > 0) {
                grid[r][c+1] = Math.min(right, distFromChest+1);
                toVisit.push([r, c+1, distFromChest+1]);
            }

            if (below && below > 0) {
                grid[r+1][c] = Math.min(below, distFromChest+1);
                toVisit.push([r+1, c, distFromChest+1]);
            }

        }
    }
}
