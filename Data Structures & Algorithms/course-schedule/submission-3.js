class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
        canFinish(numCourses, prerequisites) {
        // 1. generate a course-relation graph in the adj-list format
        const graph = new Map();
        for (let [a, b] of prerequisites) {
            if(!graph.has(b)) graph.set(b, []);
            graph.get(b).push(a);
        }

        // 2. check if the graph contains any cycles.
        for(let v = 0; v < numCourses; v++) {
            if(!this.isAcyclic(graph, v)) return false;
        }
        return true;
    }

    // check if there is any cycle starting from v in the graph
    isAcyclic(graph, v, visited = new Set(), visiting = new Set()) {
        if(visited.has(v)) return true;
        if(visiting.has(v)) return false;

        visiting.add(v);
        // traverse outgoing vertices of v using DFS
        const ws = graph.get(v) || []; 
        for(let w of ws) {
            if(!this.isAcyclic(graph, w, visited, visiting)) return false;
        }
        visiting.delete(v);
        
        visited.add(v);

        return true;
    }
}
