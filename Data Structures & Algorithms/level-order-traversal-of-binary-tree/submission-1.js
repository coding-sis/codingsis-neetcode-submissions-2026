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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];

        const res = [];
        const queue = [root]; // there is no built-in queue in nodejs, so use .push() and .shift()
        while (queue.length) {
            const level = [];
            // note on the var "len" - since the queue is growing in the for loop, fix a number before iterating.
            for (let i = 0, len = queue.length; i < len; i++) {
                const node = queue.shift();
                level.push(node.val);

                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            res.push(level);
        }

        return res;
    }
}
