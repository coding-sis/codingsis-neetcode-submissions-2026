class Solution {
    findOrder(numCourses, prerequisites) {
        const graph = this.generateAdjVerticesMap(prerequisites, 0);

        let sorted = [];
        for (let course = 0; course < numCourses; course++) {
            sorted = this.traverse(course, graph, sorted);
            if (!sorted.length) return []; // a cycle detected from v
        }

        return sorted.reverse();
    }

    
    /**
     * @param {*} vertex a starting vertex
     * @param {*} graph 
     * @param {*} dfsVisitedVertices a set of vertices visited in DFS approach from the given starting vertex
     * 
     * If there is a cycle, returns [].
     * If given graph is a DAG, returns an array ending with given vertex 
     * i.e., starting with a vertex that's the last vertex of a sorted path
     */
    traverse(vertex, graph, sorted = [], dfsVisitedVertices = new Set()) {
        if (dfsVisitedVertices.has(vertex)) return [];

        if (sorted.includes(vertex)) return sorted;

        dfsVisitedVertices.add(vertex);
        let cycleFound = false;
        const outgoing = graph.get(vertex);
        if (outgoing) {
            for (let v of [...outgoing]) {
                sorted = this.traverse(v, graph, sorted, dfsVisitedVertices);
                if (!sorted.length) {
                    cycleFound = true;
                    break;
                }
            }
        }

        if (!cycleFound) {
            dfsVisitedVertices.delete(vertex);
            sorted.push(vertex);
        }

        return sorted;
    }

    generateAdjVerticesMap(edges, dir = 1) {
        const graph = new Map();

        edges.forEach(([u, v]) => {
            if (dir) {
                if (!graph.get(u)) graph.set(u, new Set());
                graph.get(u).add(v);
            } else {
                // reverse the edge direction
                if (!graph.get(v)) graph.set(v, new Set());
                graph.get(v).add(u);
            }
        });

        return graph;
    }
}
