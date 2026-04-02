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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        if(!root) return new TreeNode(val);

        if(root.val > val) {
            root.left = this.insertIntoBST(root.left, val);            
        } else if(root.val < val){
            root.right = this.insertIntoBST(root.right, val);
        }
        return root;
    }
}
