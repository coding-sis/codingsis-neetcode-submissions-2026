class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums, i = 0, collected = [], res = [[]]) {
        if (i >= nums.length) return res;

        for(; i < nums.length; i++) {
            collected.push(nums[i]);

            res.push([...collected]);
            this.subsets(nums, i+1, collected, res); 

            collected.pop(); // backtrack
        }

        return res;
    }
}
