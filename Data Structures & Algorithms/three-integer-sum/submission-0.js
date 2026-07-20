class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        if (nums.length < 3) return [];

        const dupeCheck = new Set();
        const res = [];
        nums.sort((a, b) => a - b);
        
        // recall that the nums is sorted, 
        // return as soon as n is positive, no need to travel further.
        for(let i = 0; i < nums.length && nums[i] <= 0; i++){
            const n = nums[i];

            let l = i+1;
            let r = nums.length - 1;
            while(l < r) {
                const sum = n + nums[l] + nums[r];
                const key = n+','+nums[l]+','+nums[r];
                if (sum === 0 && !dupeCheck.has(key)) {
                    res.push([n, nums[l++], nums[r--]]);
                    dupeCheck.add(key);
                }
                else if (sum < 0) l += 1;
                else r -= 1;
            }

        }
        return res;
    }
}