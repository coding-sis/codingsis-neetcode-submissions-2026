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
    rightSideView(root) {
        if(!root) return [];

        // BFS - collect the last node at the end of each level
        const res = [];
        const queue = [root];
        while (queue.length) {
            const level = [];
            for (let i = 0, len = queue.length; i < len; i++) {
                const node = queue.shift();
                level.push(node.val);

                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            res.push(level.pop());
        }
        return res;
    }
}
