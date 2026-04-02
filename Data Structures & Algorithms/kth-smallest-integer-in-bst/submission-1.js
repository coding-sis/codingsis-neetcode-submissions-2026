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
     * @param {number} k
     * @return {number}
     */
    kthSmallest1(root, k) {
        const arr = this.visitInOrder(root);
        if(!arr.length) return undefined;
        return arr[k - 1];
    }

    visitInOrder(root) {
        if(!root) return [];

        const arr = [];
        if (root.left) arr.push(...this.visitInOrder(root.left));
        arr.push(root.val);
        if (root.right) arr.push(...this.visitInOrder(root.right));
        return arr;
    }


    kthSmallest(root, k) {
        if (!root || k < 1) return undefined;
        const stack = [];
        let curr = root;
        while (stack.length || curr) {
            while(curr) {
                stack.push(curr);
                curr = curr.left;
            }

            curr = stack.pop();
            k -= 1;
            if(k === 0) return curr.val;
            curr = curr.right;

        }
    }
}
