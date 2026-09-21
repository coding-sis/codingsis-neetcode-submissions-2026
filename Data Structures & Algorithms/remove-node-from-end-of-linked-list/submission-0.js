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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if (!head || n < 1) return head;

        // 1. find the full total length of the given list
        let totalLen = 1;
        let ptr = head;
        while(ptr.next) {
            totalLen += 1;
            ptr = ptr.next;
        }

        // 2. Remove the (totalLen-n-1)-th node from the head
        if (totalLen < n) return head;
        if (totalLen === n) return head.next; 

        let counter = 1;
        let tmp = head;
        while(tmp) {
            if (counter === totalLen - n) {
                // reached to the prev node of the node to disconnect
                let tmp2 = tmp.next? tmp.next.next: null; // a following node of the tmp.next
                tmp.next = tmp2;
                break;
            }
            tmp = tmp.next;
            counter++;
        }
        return head;
    }
}
