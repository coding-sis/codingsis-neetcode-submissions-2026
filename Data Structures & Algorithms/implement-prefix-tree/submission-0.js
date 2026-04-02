class PrefixTree {
    constructor(isWord = true) {
        this.map = {};
        this.isWord = isWord;
    }

    insert(word) {  
        let currTrie = this;
        for (const c of word) {
            if (!currTrie.map[c]) {
                currTrie.map[c] = new PrefixTree(false);
            }
            currTrie = currTrie.map[c];
        }   
        currTrie.isWord = true;
    }

    search(word) {
        let currTrie = this;
        for(const c of word) {
            if(!currTrie.map[c]) return false 
            currTrie = currTrie.map[c];
        }

        return currTrie.isWord;
    }

    startsWith(prefix){
        let currTrie = this;
        for(const c of prefix) {
            if(!currTrie.map[c]) return false 
            currTrie = currTrie.map[c];
        }

        return !!currTrie;
    }
}
