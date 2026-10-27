class Solution {
    /**
     * There is a new alien language that uses the English alphabet, but the order of the letters is unknown.
     * 
     * Suppose there are two strings - A and B.
     * A < B, if either of the following is true:
     *   (1) The first letter where they differ is smaller in A than in B.
     *   (2) A is a prefix of B && A.length < B.length.
     * 
     * @param {string[]} words a list of strings words from the alien language's dictionary. 
     *                         It is claimed that the strings in words are sorted lexicographically by the rules of this new language.
     * @returns {string} If this claim is incorrect, and the given arrangement of strings in words cannot correspond to any order of letters, return "".
                         Otherwise, return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. 
                         If there are multiple solutions, return any of them.
     */
    foreignDictionary(words) {
        // 1. create a directed graph by iterating the given words array    
        const g = this.createGraph(words);
        
        if (g === undefined) return '';

        // 2. topological sort with detecting any cycles
        const visited = new Set();
        const vertices = g.keys();
        for (let v of vertices) {
            // check paths starting from each vertice
            if(this.isCyclic(g, v, visited)) return '';
        }
        return [...visited.keys()].reverse().join('');
    }

    createGraph(words) {
        const graph = new Map();
        for (let w of words) {
            for (let c of w) graph.set(c, new Set());
        }

        for (let i = 1; i < words.length; i++) {
            const w1 = words[i-1];
            const w2 = words[i];
            if (w2.length < w1.length && w1.startsWith(w2)) return undefined;

            const minLen = Math.min(w1.length, w2.length);
            for (let j = 0; j < minLen; j++) {
                if (w1[j] !== w2[j]) {
                    graph.get(w1[j]).add(w2[j]); 
                    break;
                }
            }
        }

        return graph;
    }

    isCyclic(g, v, visited, currPath = new Set()) {
        if (currPath.has(v)) return true; // cycle detected

        if (visited.has(v)) return false; // no need to visit again

        currPath.add(v);
        const outgoing = g.get(v);
        for (let w of outgoing) {
            if (this.isCyclic(g, w, visited, currPath)) return true;
        }
        currPath.delete(v);

        visited.add(v);
        return false;
    }
}