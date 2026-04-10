class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        if(stones.length === 0) return undefined;
        if(stones.length === 1) return stones[0];

        // 1. max-heapify the given stones array
        const heap = new MaxPriorityQueue();
        stones.forEach(e => heap.enqueue(e));

        // 2. iterate until stones.length === 1
        while(heap.size() > 1) {
            const stone1 = heap.dequeue();
            const stone2 = heap.dequeue();

            heap.enqueue(Math.abs(stone1 - stone2));
            
        }

        return heap.front();
    }
}
