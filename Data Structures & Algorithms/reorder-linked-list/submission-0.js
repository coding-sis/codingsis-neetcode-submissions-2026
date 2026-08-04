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
     * @return {void}
     */
    reorderList(head) {
        // if length <= 2, then return head as is.
        if (!head || !head.next || !head.next.next) return head;

        // 1. find the mid point using the tortoise and hare approach
        const mid = this.findMid(head);

        // 2. reverse the second half of the list
        let head2 = this.reverse(mid);

        // 3. combine the two sub-arrays one by one in order
        return this.combine(head, head2);
    }

    findMid(head) {
        let slow = head;
        let fast = head.next;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        const head2 = slow.next;
        slow.next = null; // terminate the first half
        return head2;
    }

    reverse(head) {
        let curr = head;
        let p1 = head.next;
        let p2 = head.next? head.next.next : null;
        let tail = head;
        while(p1) {
            p1.next = curr;

            curr = p1;
            p1 = p2;

            if(!p2) break;
            p2 = p2.next;
        }
        tail.next = null;
        return curr;
    }

    combine(h1, h2) {
        let p1 = h1;
        let p2 = h2;
        while (p2) {
            let tmp1 = p1.next;
            let tmp2 = p2.next;

            p1.next = p2;
            p2.next = tmp1;

            p1 = tmp1;
            p2 = tmp2;
        }

        return h1;
    }
}
