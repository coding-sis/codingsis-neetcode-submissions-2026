/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {

    findMinNode(root, parent = null) {
        if(!root) return {node: null, parent};

        let currNode = root;
        while (currNode.left) {
            // traverse the tree to the left most leaf
            parent = currNode;
            currNode = currNode.left;
        }
        return {node: currNode, parent};
    }

    findMaxNode(root, parent = null) {
        if(!root) return {node: null, parent};

        let currNode = root;
        while (currNode.right) {
            // traverse the tree to the right most leaf
            parent = currNode;
            currNode = currNode.right;
        }
        return {node: currNode, parent};
    }

    /**
     * @param {TreeNode} root
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, val) {
        if (!root) return null;

        if (root.val === val) {
            const {node: node1, parent: parent1} = this.findMaxNode(root.left);
            const {node: node2, parent: parent2} = this.findMinNode(root.right);

            if(!node1 && !node2) {
                return null;
            }

            if (node1) {
                // Replace given input root with node1
                // 1. disconnect node1 from its parent
                if(parent1) {
                    if (node1 === parent1.left) parent1.left = null;
                    else parent1.right = null;
                }
                

                // 2. connect node1 to the root's child nodes
                if(root.left !== node1) node1.left = root.left;
                node1.right = root.right;
                return node1;
            } 

            // Replace given input root with node2
            if(parent2) {
                if(node2 === parent2.left) parent2.left = null;
                else parent2.right = null;
            }

            node2.left = root.left;
            if(root.right !== node2) node2.right = root.right;
            return node2;
        } 

        if (root.val > val) {
            // go to the left tree of the root node
            root.left = this.deleteNode(root.left, val, root);
        } else {
            // go to the right tree of the root node
            root.right = this.deleteNode(root.right, val, root);
        }
        return root;
    }
}
