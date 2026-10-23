class Solution {
    /**
     * You are given an m x n matrix board containing letters 'X' and 'O', 
     * capture regions that are surrounded:
     *  - Connect: A cell is connected to adjacent cells horizontally or vertically.
     *  - Region: To form a region, connect every 'O' cell. 
     *            Regions can have any shape; they do not need to be squares or rectangles.
     *  - Surround: A region is surrounded if none of the 'O' cells in that region are on the edge of the board. 
     *            Such regions are completely enclosed by 'X' cells.
     * 
     * To capture a surrounded region, replace all 'O's with 'X's in-place within the original board. 
     * You do not need to return anything.
     * 
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        // 1. collect 'O' in the edges of the board
        const queue = []; 
        for(let r = 0; r < board.length; r++) {
            for(let c = 0; c < board[0].length; c++) {
                if (board[r][c] === 'O' 
                    && (r === 0 || r === board.length -1 || 
                        c === 0 || c === board[0].length -1)) {
                        board[r][c] = 'OO'; 
                        queue.push([r, c]);
                }
            }
        }

        this.bfs(board, queue)

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[0].length; c++) {
                const val = board[r][c];
                if (val === 'OO') board[r][c] = 'O';
                if (val === 'O') board[r][c] = 'X';
            }
        }
    }

    bfs (board, queue) {
        for (let i = 0; i < queue.length; i++) {
            const [r, c] = queue[i];
            
            // find O cells that are connected to OO cells
            const neighbors = [[r+1, c], [r-1, c], [r, c-1], [r, c+1]];
            for (let j = 0; j < 4; j++) {
                const [nR, nC] = neighbors[j];
                const val = board[nR] && board[nR][nC] || undefined;
                if (val === 'O') {
                    queue.push([nR, nC]);
                    board[nR][nC] = 'OO';
                } 
            }
        }
    }
}