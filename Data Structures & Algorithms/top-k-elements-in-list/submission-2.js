class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if (k === 0) return [];

        const frequencyMap = new Map();
        for(let n of nums) {
            if(!frequencyMap.has(n)) frequencyMap.set(n, 0);
            frequencyMap.set(n, frequencyMap.get(n)+1);
        }

        const heap = new MinPriorityQueue(i => frequencyMap.get(i));
        // Put keys of frequencyMap to a min heap using the frequency as its comparison factor
        // Remember to keep min-heap size to k
        for(let [num, freq] of frequencyMap) {
            heap.enqueue(num);
            if (heap.size() > k) heap.pop();
        }
        
        // collect the values in the heap by popping
        const res = [];
        while(!heap.isEmpty()) {
            res.push(heap.pop());
        }

        return res;
    }

}
