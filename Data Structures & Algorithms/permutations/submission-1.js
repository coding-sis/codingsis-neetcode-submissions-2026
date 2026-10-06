class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];
        this.collect(nums, res);
        return res;
    }

    collect(nums, res, collected = []) {
        if(nums.length === collected.length) {
            res.push([...collected]);
            return;
        }

        for(let i = 0; i < nums.length; i++) {
            if (collected.findIndex(n => n === nums[i]) >= 0) continue;

            collected.push(nums[i]);
            this.collect(nums, res, collected);
            collected.pop();
        }
    }
}
