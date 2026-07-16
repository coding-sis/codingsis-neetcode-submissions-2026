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

        const bucket = new Array(nums.length);
        for(let [n, f] of frequencyMap) {
            if(!bucket[f]) bucket[f] = [];
            bucket[f].push(n);
        }

        const res = [];
        for(let i = bucket.length - 1; i > 0; i--) {
            if (!bucket[i]) continue; // if undefined, skip

            res.push(...bucket[i]);
            if(res.length >= k) return res; // once collected at least k elements, stop there.
        }
        
        return res;
    }
}
