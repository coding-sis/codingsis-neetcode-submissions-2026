class PrefixTree {
    constructor() {
        this.map = new Map();
        this.map.set("wordEnded", false);
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let currTrie = this;
        for(let i = 0; i < word.length; i++) {
            let c = word[i];
            if(!currTrie.map.has(c)) currTrie.map.set(c, new PrefixTree());    

            currTrie = currTrie.map.get(c);
        }
        currTrie.map.set('wordEnded', true);
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let currTrie = this;
        for(let c of word) {
            if(!currTrie.map.has(c)) return false;

            currTrie = currTrie.map.get(c);
        }
        return currTrie.map.get('wordEnded');
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let currTrie = this;
        for(let c of prefix) {
            if(!currTrie.map.has(c)) return false;

            currTrie = currTrie.map.get(c);
        }
        return currTrie !== null;
    }
}