class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    // manipulate the input grid
    orangesRotting(grid) {
        // collect fresh fruits and rotten fruits in the init input
        let freshFruits = 0;
        const rottenFruits = [];
        for(let r = 0; r < grid.length; r++) {
            for(let c = 0; c < grid[0].length; c++) {
                if(grid[r][c] === 0) continue;
                if(grid[r][c] === 1) freshFruits++;
                if(grid[r][c] === 2) rottenFruits.push([r, c]);
            }
        }

        let mins = 0;
        let head = 0;
        while (freshFruits > 0) {
            const currSize = rottenFruits.length - head;
            if(!currSize) return -1; // there are fresh fruits, but no rotten fruits to process.

            for(let i = 0; i < currSize; i++) {
                const [r, c] = rottenFruits[head++];

                // contaminate adjacent fresh fruits
                if(r - 1 >= 0 && r-1 < grid.length 
                    && c >= 0 && c < grid[0].length 
                    && grid[r-1][c] === 1) {
                    freshFruits--;
                    grid[r-1][c] = 2;
                    rottenFruits.push([r-1, c]);
                }
                if(r >= 0 && r < grid.length && 
                    c-1 >= 0 && c-1 < grid[0].length && 
                    grid[r][c-1] === 1) {
                    freshFruits--;
                    grid[r][c-1] = 2;
                    rottenFruits.push([r, c-1]);
                }
                if(r >= 0 && r < grid.length && 
                    c+1 >= 0 && c+1 < grid[0].length && 
                    grid[r][c+1] === 1) {
                    freshFruits--;
                    grid[r][c+1] = 2;
                    rottenFruits.push([r, c+1]);
                }
                if(r+1 >= 0 && r+1 < grid.length && 
                    c >= 0 && c < grid[0].length && 
                    grid[r+1][c] === 1) {
                    freshFruits--;
                    grid[r+1][c] = 2;
                    rottenFruits.push([r+1, c]);
                }
            }
            mins += 1;
        }

        return mins;
    }
}
