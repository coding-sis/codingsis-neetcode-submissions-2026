class WordDictionary {
    constructor(isWord = false) {
        this.charMap = {};
        this.isWord = isWord;
    }

    /**
     * add a given word to the DS
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let currWd = this;

        for (const c of word) {
            if (!currWd.charMap[c]) {
                currWd.charMap[c] = new WordDictionary();
            }
            currWd = currWd.charMap[c];
        }

        currWd.isWord = true;
    }

    search(word) {
        if (!word || !word.length) return false;

        // base case
        if (word.length === 1) {
            if (word !== '.') return this.charMap[word] && this.charMap[word].isWord;

            // find if any word endings exist in the trie position.
            const check = Object.entries(this.charMap).find(([c, wd]) => wd.isWord);
            return !!check; 
        }

        const char1 = word.charAt(0); // first char in the given word
        const rest = word.slice(1);
        if (char1 !== '.') {
            if (!this.charMap[char1]) return false;
            return this.charMap[char1].search(rest);
        }

        // if the first char is a dot('.'), iterate each entry recursively 
        for (const [_, trie] of Object.entries(this.charMap)) {
            if (trie.charMap) {
                if (trie.search(rest)) return true;
            }
        }
        return false;
    }
}
