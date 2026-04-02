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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if (!preorder.length || !inorder.length) return null;

        const root = new TreeNode(preorder[0]);
        let rootIndex = inorder.indexOf(preorder[0]);

        let leftIn = inorder.slice(0, rootIndex);
        let rightIn = inorder.slice(rootIndex + 1);

        let leftPre = preorder.slice(1, leftIn.length + 1);
        let rightPre = preorder.slice(leftIn.length + 1);

        const leftTree = this.buildTree(leftPre, leftIn);
        const rightTree = this.buildTree(rightPre, rightIn);

        root.left = leftTree;
        root.right = rightTree;

        return root;
    }
}
