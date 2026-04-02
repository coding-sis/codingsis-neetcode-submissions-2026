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
    buildTreeOld(preorder, inorder) {
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


    buildTreeHelper (preorder, inorder, inorderIndexesMap, 
                     preStart=0, preEnd = preorder.length - 1, 
                     inStart=0, inEnd = inorder.length - 1) {
        if (preStart > preEnd) return null;

        const root = new TreeNode(preorder[preStart]);
        const rootIdx = inorderIndexesMap.get(preorder[preStart]);
        
        root.left = this.buildTreeHelper(preorder, inorder, inorderIndexesMap, 
                    preStart + 1, preStart + (rootIdx - inStart), 
                    inStart, rootIdx - 1);
        root.right = this.buildTreeHelper(preorder, inorder, inorderIndexesMap, 
            preStart + (rootIdx - inStart) + 1, preEnd, 
            rootIdx + 1, inEnd);
        return root;
    }

    buildTree(preorder, inorder) {
        if (!preorder || !preorder.length) {
            // assume the length of preorder and inorder are the same
            // hence, if preorder is either null or empty, return null as an empty tree.
            return null;
        }

        const inorderIndexesMap = new Map(inorder.map((val, idx) => [val, idx]));

        return this.buildTreeHelper(preorder, inorder, inorderIndexesMap);
    }
}
