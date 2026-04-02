class Solution {
pacificAtlantic(heights) {
        this.initHeights(heights); // convert each cell into [h, false, false]

        for (let row = 0; row < heights.length; row++) {
            for (let col = 0; col < heights[row].length; col++) {
                if ((row === 0 || col === 0) && !heights[row][col][1]) {
                    // cells in the first row and first col are Pacific-accessible
                    this.broadcast(heights, [[row, col]], 1);
                }
                if ((row === heights.length - 1 || col === heights[row].length - 1) && !heights[row][col][2]) {
                    // cells in the bottom row and last col are Atlantic-accessible.
                    this.broadcast(heights, [[row, col]], 2);
                }
            }
        }

        const res = [];
        // iterate the heights grid to find Atlantic-accessible cells
        for (let row = 0; row < heights.length; row++) {
            for (let col = 0; col < heights[row].length; col++) {
                // if a cell is both P&A-accessible put it to the res.
                if (heights[row][col][1] && heights[row][col][2]) {
                    res.push([row, col]);
                }
            }
        }

        return res;
    }


    // broadcast using BFS
    broadcast(heights, accessibles, oceanToAccess) {
        while (accessibles.length) {
            const [r, c] = accessibles.pop();
            const cell = heights[r][c];

            // mark the cell's accessbility to a selected ocean
            cell[oceanToAccess] = true;

            // find neighboring cells that have a height >= the cell's, but not marked yet.
            const above = heights[r - 1] && heights[r - 1][c];
            const left = heights[r][c - 1];
            const right = heights[r][c + 1];
            const below = heights[r + 1] && heights[r + 1][c];
            if (above && above[0] && above[0] >= cell[0] && !above[oceanToAccess]) {
                accessibles.push([r - 1, c]);
            }
            if (left && left[0] && left[0] >= cell[0] && !left[oceanToAccess]) {
                accessibles.push([r, c - 1]);
            }
            if (right && right[0] && right[0] >= cell[0] && !right[oceanToAccess]) {
                accessibles.push([r, c + 1]);
            }
            if (below && below[0] && below[0] >= cell[0] && !below[oceanToAccess]) {
                accessibles.push([r + 1, c]);
            }
        }
    }

    initHeights(heights) {
        for (let row = 0; row < heights.length; row++) {
            for (let col = 0; col < heights[row].length; col++) {
                // two booleans are default value to accessibility to Pacific and Atlantic
                // [heightVal, accessbilityToPacific, toAtlantic]
                heights[row][col] = [heights[row][col], false, false];
            }
        }
    }
}
