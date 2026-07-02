class Solution {

    isCyclic(graph, v, visited=new Set(), currPath=new Set()) {
        if (currPath.has(v)) return true;

        if (visited.has(v)) {
            return false;
        }

        currPath.add(v);
        const outgoings = graph.get(v);
        for(let w of outgoings) {
            if(this.isCyclic(graph, w, visited, currPath)) return true;
        }
        currPath.delete(v);
        visited.add(v);
        return false;
    }

    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        // 0. init the graph
        let graph = new Map(); 
        for(let word of words) {
            for(let c of word) {
                graph.set(c, []);
            }
        }
        // 1. iterate the given input array, and create a graph out of chars in the words
        let w1 = words[0];
        for(let i = 1; i < words.length; i++) {
            let w2 = words[i];
            if (w1.length > w2.length && w1.startsWith(w2)) return "";
            
            // find the first different char in w1 and w2 and add them to the graph
            for(let j = 0; j < Math.min(w1.length, w2.length); j++){
                if(w1[j] !== w2[j]) {
                    graph.get(w1[j]).push(w2[j]);
                    break;
                }
            }
            w1 = w2;
        }

        // detect cycles in the graph, if so return ""
        const visited = new Set();
        for(let v of graph.keys()) {
            if (this.isCyclic(graph, v, visited)) return "";
        }

        // get a topological sorted string of the graph
        return [...visited].reverse().join('');
    }
}