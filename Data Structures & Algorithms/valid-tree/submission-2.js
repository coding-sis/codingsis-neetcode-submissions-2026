class Solution {
        /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const graph = new Map();

        for(let [u, v] of edges) {
            // If u and v are already connected, not a tree.
            const connected = this.isConnected(u, v, graph);
            if(connected) return false;
        }

        return graph.size <= 1;
    }

    isConnected(u, v, graph) {
        // If u and v are already connected, return false
        const repU = this.findRepresentative(u, graph);
        const repV = this.findRepresentative(v, graph);
        if(repU === repV) return true;

        // otherwise, update graph and return true
        graph.set(repU, new Set([v, repV, ...(graph.get(repU) || []), ...(graph.get(repV) || [])]));

        graph.delete(repV);

        return false;
    }

    findRepresentative(u, graph) {
        let rep = u;

        for(let v of graph.keys()) {
            if(graph.get(v) && graph.get(v).has(u)) {
                rep = this.findRepresentative(v, graph);
            }
        }

        return rep;
    }
}
