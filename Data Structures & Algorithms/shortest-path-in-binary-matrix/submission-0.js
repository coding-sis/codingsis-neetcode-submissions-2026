class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
        /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        const visited = new Set();
        const queue = [[0, 0]];
        let pathLength = 0;
        while(queue.length > 0) {
            const len = queue.length;
            
            for(let i = 0; i < len; i++) {
                const [r, c] = queue.shift();
                if(r === grid.length-1 && c === grid[0].length-1) {
                    return pathLength+1;
                }

                // bypass any visited cells
                if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length ||
                    !grid[r] || grid[r][c] || 
                    visited.has(r+","+c)) continue;

                visited.add(r+","+c);
                // add the 8 adj cells in the next layer
                queue.push([r-1, c-1]);
                queue.push([r-1, c]);
                queue.push([r-1, c+1]);
                queue.push([r, c-1]);
                queue.push([r, c+1]);
                queue.push([r+1, c-1]);
                queue.push([r+1, c]);
                queue.push([r+1, c+1]);
            }
            pathLength += 1;
        }

        return -1;
    }
}
