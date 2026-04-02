class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        for (let r = 1; r < board.length - 1; r++) {
            for (let c = 1; c < board[r].length - 1; c++) {
                if (board[r][c] === 'O') {
                    // if a cell === 'O', find all the connected 0s (in case any cells are an edge cell, this helper function returns an empty array)
                    const connected = this.findConnected(board, [[r, c]], new Set(r + ',' + c));

                    // mark the connected cells X
                    connected && connected.forEach(([rr, cc]) => {
                        console.log(rr, cc);
                        board[rr][cc] = 'X'
                    });
                }
            }
        }

        return board;
    }

    findConnected(board, toVisit, checkSet) {
        const connected = [];
        while (toVisit.length) {
            const [r, c] = toVisit.pop();
            // if a cell is in the board edge, return []
            if (r === 0 || r === board.length - 1 || c === 0 || c === board[r].length - 1) return [];

            connected.push([r, c]);
            checkSet.add(r+ ',' + c);
            
            const above = board[r - 1][c];
            const left = board[r][c - 1];
            const right = board[r][c + 1];
            const below = board[r + 1][c];
            if (above && above === 'O' && !checkSet.has((r - 1) + ',' + c)) {
                toVisit.push([r - 1, c]);
            }
            if (left && left === 'O' && !checkSet.has(r + ',' + (c - 1))) {
                toVisit.push([r, c - 1]);
            }
            if (right && right === 'O' && !checkSet.has(r + ',' + (c + 1))) {
                toVisit.push([r, c + 1]);
            }
            if (below && below === 'O' && !checkSet.has((r + 1) + ',' + c)) {
                toVisit.push([r+1, c]);
            }
        }

        return connected;
    }
}
