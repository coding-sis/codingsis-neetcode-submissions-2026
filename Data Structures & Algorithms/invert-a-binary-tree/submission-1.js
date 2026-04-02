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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root) return root;

        const left = root.left;
        const right = root.right;
        root.left = right? this.invertTree(right): null;
        root.right = left? this.invertTree(left): null;

        return root;
    }
}
