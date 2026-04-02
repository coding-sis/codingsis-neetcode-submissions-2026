class Solution {
    public Integer findKthLargest(int[] nums, int k) {
        // create a k-sized minHeap
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for(int i = 0; i < k; i++) {
            pq.add(nums[i]);
        }

        // add the rest elements to the heap while keeping its size to k
        for(int i = k; i < nums.length; i++) {
            if(nums[i] > pq.peek()) {
                pq.remove();
                pq.add(nums[i]);
            }
        }

        return pq.peek();
    }
}
