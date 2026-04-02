class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // 1. build a graph representation for accurate traversing
        const graph = new Map();
        for (let [a, b] of prerequisites) {
            if (!graph.get(a)) graph.set(a, new Set());
            graph.get(a).add(b);
        }

        // 2. DFS-traverse the graph from a source vertex "course", and 
        //    if there's a cycle detected while traversing, return false
        for (let course = 0; course < numCourses; course++) {
            if (!this.isAcyclic(graph, course)) return false;
        }

        return true;
    }

    isAcyclic(graph, course, dfsPath = []) {
        if (dfsPath.indexOf(course) > -1) return false;

        dfsPath.push(course);

        const outgoing = graph.get(course);
        if(outgoing){
            for(let v of outgoing) {
                if (!this.isAcyclic(graph, v, dfsPath)) return false;
                dfsPath.pop();
            };
        }
        return true;
    }
}
