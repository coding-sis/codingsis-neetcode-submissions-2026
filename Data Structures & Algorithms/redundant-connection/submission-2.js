class Solution {
    findRedundantConnection(edges) {
        let redundant = undefined;

        const graph = new Map();
        for(let [u, v] of edges) {
            const p1 = this.find(u, graph);
            const p2 = this.find(v, graph);
            if (p1 === p2) {
                redundant = [u, v];
            } else {
                this.compressGraph(u, v, graph);
            }
        }

        return redundant;
    }

    compressGraph(u, v, graph) {
        const pU = this.find(u, graph);
        const pV = this.find(v, graph);
        
        

        const updated = new Set([
            v, pV, 
            ...(graph.get(pV) || []), 
            ...(graph.get(pU) || [])]
        );
        graph.set(pU, updated);
        graph.delete(pV);
    }

    find(u, graph) {
        let parent = u;

        for (let p of graph.keys()) {
            const childNodes = graph.get(p);
            if (childNodes.has(u)) {
                parent = this.find(p, graph);
            }
        }
        return parent;        
    }
}
