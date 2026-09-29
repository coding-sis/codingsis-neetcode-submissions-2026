class WordTrie {
    constructor(isEndOfWord=false, children = new Map()) {
        this.children = children; // {c: childDictionary}
        this.isEndOfWord = isEndOfWord;
    }

    /**
     * @param {string} word
     * @return {void}
     */
    add(word) {
        let curr = this;

        for (let i = 0; i < word.length; i++) {
            const c = word[i];

            if (!curr.children.has(word[i])) {
                curr.children.set(c, new WordTrie());
            }

            curr = curr.children.get(c);
        }

        // At this point, all the chars are processed.
        // Mark the very last dictionary object as end of word
        curr.isEndOfWord = true;
    }
}
class Solution {
    searchTrie(r, c, board, trie, res, word='', visited = new Set()) {
        trie = trie.children.get(board[r][c]);
        
        if (!trie
            || visited.has(r+','+c)
            || r < 0 || r >= board.length 
            || c < 0 || c >= board[0].length
        ) {
            return;
        }
        if(trie.isEndOfWord) res.add(word);

        // Explore the 4 directions of cell[r][c]
        visited.add(r+','+c);
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for(let [rOffset, cOffset] of directions) {
            if (board[r+rOffset] && board[r+rOffset][c+cOffset]) {
                this.searchTrie(
                    r+rOffset, 
                    c+cOffset, 
                    board, 
                    trie,
                    res, 
                    word+board[r+rOffset][c+cOffset], 
                    visited);
            }
        }
        visited.delete(r+','+c);
    }

    findWords (board, words) {
        // create a Trie based on the given list of words
        const trie = new WordTrie();
        for(let word of words) {
            trie.add(word);
        }

        // Iterate each letter in board and find words that exist in the trie.
        const res = new Set();
        for(let r = 0; r < board.length; r++) {
            for(let c = 0; c < board[0].length; c++) {
                this.searchTrie(r, c, board, trie, res, board[r][c]);
            }
        }
        return Array.from(res);
    }
}
