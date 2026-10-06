class Solution {
    /**
     * @param {number[]} nums array of unique integers
     * @return {number[][]} return all the possible permutations. You may return the answer in any order.
     */
    permute(nums) {
        const res = [];
        this.collect(nums, res);
        return res;
    }

    collect(nums, res, collected = [], picked = new Array(nums.length).fill(false)) {
        if(nums.length === collected.length) {
            res.push([...collected]);
            return;
        }

        for(let i = 0; i < nums.length; i++) {
            if (picked[i]) continue;

            picked[i] = true;
            collected.push(nums[i]);
            this.collect(nums, res, collected, picked);
            collected.pop();
            picked[i] = false;
        }
    }
}