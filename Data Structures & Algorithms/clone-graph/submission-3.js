
class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node, copied = new Map()) {
        if (!node) return null;

        if (copied.has(node)) return copied.get(node);

        const copy = new Node(node.val);
        copied.set(node, copy);

        for (const n of node.neighbors) {
            copy.neighbors.push(
                this.cloneGraph(n, copied)
            );
        }

        return copy;
    }
}