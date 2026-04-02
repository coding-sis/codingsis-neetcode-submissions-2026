class Solution {
    existHelper(board, word, currCharPos = 0, currCellPos = [0, 0]) {
        if (currCharPos === word.length) return true;

        let [r, c] = currCellPos;
        const char = word[currCharPos];
        if (r < 0 || r >= board.length || c < 0 || c >= board[0].length || char !== board[r][c]) {
            return false;
        }

        const temp = board[r][c];
        board[r][c] = undefined; // a way to mark the cell as visited and moved on, in order to prevent retracting.

        const above = this.existHelper(board, word, currCharPos + 1, [r - 1, c]);
        const below = this.existHelper(board, word, currCharPos + 1, [r + 1, c]);
        const left = this.existHelper(board, word, currCharPos + 1, [r, c - 1]);
        const right = this.existHelper(board, word, currCharPos + 1, [r, c + 1]);

        // reset the path and board
        board[r][c] = temp;

        return above || left || right || below;
    }

    exist(board, word) {
        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {
                if (board[r][c] === word[0] && this.existHelper(board, word, 0, [r, c])) return true;
            }
        }
        return false;
    }
}
