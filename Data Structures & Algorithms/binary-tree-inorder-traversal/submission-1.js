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
    inorderTraversal(root, res = []) {
        if(!root) return res;

        this.inorderTraversal(root.left, res);
        res.push(root.val);
        this.inorderTraversal(root.right, res);
        return res;
    }
}
