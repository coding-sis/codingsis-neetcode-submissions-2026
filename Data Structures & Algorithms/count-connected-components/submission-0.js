class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
    // 1. generate an initial adj list map based off of the given number of vertices
    const graph = this.generateAdjMap(n);

    // 2. compress the graph
    for (let [u, v] of edges) {
        const repU = this.findRepresentative(u, graph);
        const repV = this.findRepresentative(v, graph);

        if(repU === repV) continue;

        // union repU and repV i.e., graph[repU] = all the combined elements of both repV and repU
        graph.set(repU, new Set([v, repV, ...graph.get(repU), ...graph.get(repV)]));

        // remove repV from the graph map, since all the repV components are moved to under repU.
        graph.delete(repV);
    }

    // 3. return # remaining keys in the compressed graph map.
    return [...graph.keys()].length;
}

findRepresentative(v, graph) {
    let rep = v;

    for (const u of graph.keys()) {
        if (graph.get(u) && graph.get(u).has(v)) {
            rep = this.findRepresentative(u, graph);
        }
    }

    return rep;
}

generateAdjMap(n){
    const graph = new Map();

    for(let i = 0; i < n; i++) {
        graph.set(i, new Set());
    }
    
    return graph;
}
}
