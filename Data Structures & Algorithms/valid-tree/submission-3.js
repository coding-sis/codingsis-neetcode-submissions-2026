// https://neetcode.io/problems/valid-tree/question?list=blind75
class Solution {
   /**
     * Using DFS, check if given undirected graph is connected and acyclic.
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean} true, if given graph is connected and acyclic using DFS.
     */
    validTree(n, edges) {
        // 1. Traverse the graph from node 0 in the DFS approach
        //    While traversing, if any cycle is detected, return false
        const visited = new Set();
        if(this.isCyclic(0, edges, visited)) return false;

        // 2. Recall that, at this point, the graph has been traversed from the node 0 and found no cycles.
        // Hence, check if all the nodes have been visited (i.e., connected)
        return visited.size === n; 
    }

    isCyclic(currNode, edges, visited, parentNode=null) {
        if (currNode === parentNode) return false; // this case, it's not a cycle.
        if (visited.has(currNode)) return true; // a cycle is found
        
        visited.add(currNode);

        // dfs-traverse the graph
        for (let nextNode of this.findConnectedNodes(currNode, edges)) {
            if (nextNode === parentNode) continue; // no need to traverse

            if (this.isCyclic(nextNode, edges, visited, currNode)) return true;
        }

        return false;
    }


    findConnectedNodes(currNode, edges) {
        const nodes = [];

        for(let [v1, v2] of edges) {
            if (currNode === v1) nodes.push(v2);
            else if (currNode === v2) nodes.push(v1);
        }

        return nodes;
    }
}