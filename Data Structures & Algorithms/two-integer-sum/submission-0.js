class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for(let i = 0; i < nums.length; i++) {
            if(map.has(nums[i])) {
                map.set(nums[i], [...map.get(nums[i]), i]);
            } else {
                map.set(nums[i], [i]);
            }
        }
        
        for(let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (map.has(diff)) {
                const indexes = map.get(diff);
                const find = indexes.find(x => x != i);
                if (find >= 0) {
                    return [i, indexes.find(x => x != i)];
                }
            }
        }
        return null;
    }
}
