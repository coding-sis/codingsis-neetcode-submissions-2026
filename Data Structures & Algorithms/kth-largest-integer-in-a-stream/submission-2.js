class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.heap = this.initHeap(nums);
    }

    initHeap(nums) {
        const heap = new MinPriorityQueue();
        nums.forEach(e => heap.push(e));
        
        // move the initial k-th largest to the root of the heap
        while (heap.size() > this.k) {
            heap.pop();
        }
        return heap;
    }

    add(e) {
        this.heap.push(e);

        if (this.heap.size() > this.k) {
            this.heap.pop();
        }

        return this.heap.front();
    }
}
