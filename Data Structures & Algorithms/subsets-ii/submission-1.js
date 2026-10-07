class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);

        const res = [[]];
        this.collect(nums, res);
        return res;
    }

    collect (nums, res, start = 0, collected = []) {
        if (start === nums.length) return;
        
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i-1]) continue;

            res.push([...collected, nums[i]]);

            collected.push(nums[i]);
            this.collect(nums, res, i+1, collected);
            collected.pop();
        }
    }
}
