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
    isBalancedHelper(root) {
        if(!root) return { balanced: true, height: 0 };

        const {balanced: b1, height: h1} = this.isBalancedHelper(root.left);
        const {balanced: b2, height: h2} = this.isBalancedHelper(root.right);

        const height = Math.max(h1, h2) + 1;
        if(!b1 || !b2) return {balanced: false, height};
    
        return {balanced: Math.abs(h1 - h2) <= 1, height}    
    }

    isBalanced(root) {
        return this.isBalancedHelper(root).balanced;
    }
}
