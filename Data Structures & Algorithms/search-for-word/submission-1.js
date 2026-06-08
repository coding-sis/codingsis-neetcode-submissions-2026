class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        for(let r = 0; r < board.length; r++) {
            for(let c = 0; c < board[0].length; c++) {
                if(board[r][c] === word[0] && this.search(board, word, r, c)) return true;
            }
        }
        return false;
    }

    search (board, word, r, c, i = 0, visited = new Set()) {
        if (i === word.length) return true;

        if (r >= board.length || c >= board[0].length || r < 0 || c < 0
            || visited.has(r + "," + c)
            || board[r][c] !== word[i]) return false;
        
        visited.add(r+","+c);
        if(this.search(board, word, r-1, c, i+1, visited)
        || this.search(board, word, r+1, c, i+1, visited)
        || this.search(board, word, r, c+1, i+1, visited)
        || this.search(board, word, r, c-1, i+1, visited)
        ) return true;
        visited.delete(r+","+c);

        return false;
    }
}