class Solution {
    /** You are given a 2-D matrix grid. Each cell can have one of three possible values:
     *   0 representing an empty cell
     *   1 representing a fresh fruit
     *   2 representing a rotten fruit
     * 
     * Every minute, if a fresh fruit is horizontally or vertically adjacent to a rotten fruit, 
     * then the fresh fruit also becomes rotten.
     * Return the minimum number of minutes that must elapse suntil there are zero fresh fruits remaining. 
     * If this state is impossible within the grid, return -1.
     */
    orangesRotting(grid) {
        // 0. collect fresh fruits in the init input
        // 1. collect init rotten fruits and start rotting fruits layer by layer
        const freshFruits = new Set(); // there are fruits to visit and rot.
        const rottenFruits = [];
        for(let r = 0; r < grid.length; r++) {
            for(let c = 0; c < grid[0].length; c++) {
                if(grid[r][c] === 0) continue;
                if(grid[r][c] === 1) freshFruits.add(r +"," +c);
                if(grid[r][c] === 2) rottenFruits.push([r, c]);
            }
        }

        let mins = 0;
        while (freshFruits.size > 0) {
            let currRottenFruits = rottenFruits.length;
            // there are fresh fruits, but no rotten fruits to process.
            if(!currRottenFruits) return -1; 

            for(let i = 0; i < currRottenFruits; i++) {
                const [r, c] = rottenFruits.shift();

                // contaminate adjacent fresh fruits
                if(freshFruits.delete(r-1 +","+ c)) rottenFruits.push([r-1, c]);
                if(freshFruits.delete(r +","+ (c-1))) rottenFruits.push([r, c-1]);
                if(freshFruits.delete(r + "," + (c+1))) rottenFruits.push([r, c+1]);
                if(freshFruits.delete((r+1) +"," + c)) rottenFruits.push([r+1, c]);
            }
            mins += 1;
        }

        return mins;
    }
}