/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let curr = head;
        const visited = new Set();
        while (curr) {
            if(visited.has(curr)) return true;

            visited.add(curr);
            curr = curr.next;
        }
        return false;
    }
}
