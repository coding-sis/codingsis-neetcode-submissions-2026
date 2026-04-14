class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const queue = new MaxPriorityQueue();
        nums.forEach(n => {
            queue.enqueue(n);
            if(queue.size() > nums.length - k + 1) queue.dequeue();
        });

        return queue.front();
    }
}
