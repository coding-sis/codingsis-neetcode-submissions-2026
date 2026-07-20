class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        if (nums.length < 3) return [];

        const res = [];
        nums.sort((a, b) => a - b);
        
        // recall that the nums is sorted, 
        // return as soon as n is positive, no need to travel further.
        for(let i = 0; i < nums.length && nums[i] <= 0; i++){
            const n = nums[i];

            if(i > 0 && nums[i] === nums[i-1]) continue; // prevent dupes

            let l = i+1;
            let r = nums.length - 1;
            while(l < r) { 
                const sum = n + nums[l] + nums[r];

                if (sum < 0) l++;
                else if(sum > 0) r--;
                else {
                    res.push([n, nums[l++], nums[r--]]);

                    // skip same values to prevent dupes
                    while(l < r && nums[l] === nums[l-1]) l++;
                    while(l < r && nums[r] === nums[r+1]) r--;
                }
            }

        }
        return res;
    }
}
