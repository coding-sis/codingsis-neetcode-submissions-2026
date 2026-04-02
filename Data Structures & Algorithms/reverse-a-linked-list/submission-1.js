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
     * @return {ListNode}
     */
    reverseList(head) {
        if(!head) return head;
        
        let curr = head;
        let next = curr.next;
        while (next) {
            let next2 = next.next;

            next.next = curr;

            curr = next;
            next = next2;
        }

        head.next = null;
        return curr;
    }
}
