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
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    inorderTraversal(root) {
        if(!root) return [];

        let leftTree = [];
        let rightTree = [];
        if(root.left) leftTree = [...this.inorderTraversal(root.left)];
        if(root.right) rightTree = [...this.inorderTraversal(root.right)];
        return [...leftTree, root.val, ...rightTree];
    }
}
