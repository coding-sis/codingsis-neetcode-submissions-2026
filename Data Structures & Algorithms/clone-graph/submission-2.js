/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    cloneGraph(node, nodeCopyMap = new Map()) {
        if(!node) return null;

        // if a copied node of the given input node is in the map, 
        // return that node ref
        if (nodeCopyMap.get(node.val)) {
            return nodeCopyMap.get(node.val);
        }

        const copiedNode = new Node(node.val);
        nodeCopyMap.set(node.val, copiedNode);

        if(node.neighbors && node.neighbors.length) {
            for (let neighbor of node.neighbors) {
                const copied = this.cloneGraph(neighbor, nodeCopyMap);
                copiedNode.neighbors.push(copied);
            }
        }
        
        return copiedNode;
    }
}
