class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    // Prerequisite - sort the nums prior to calling this function
    subsetsHelper(nums, res = [[]], collected = [], currPos = 0) {
        if (nums.length === currPos) return res;

        for (let i = currPos; i < nums.length; i++) {
            if (i > currPos) {
                // Duplicate handling - adjust the i variable value.
                // Recall that, in the step of i = currPos, all the subsets including the dupes of the nums[i] have been collected.
                // Hence, jump to a following elem, where its value != nums[i].
                i = nums.findIndex((e) => e > nums[i-1]);
                if(i === -1) return res; // if not found, return.
            }

            // the same backtracking with the problem - subsets 1
            const val = nums[i];
            collected.push(val);
            res.push([...collected]);

            this.subsetsHelper(nums, res, collected, i + 1);

            collected.pop();

        }
        return res;
    }

    subsetsWithDup (nums) {
        return this.subsetsHelper(nums.sort((a, b) => a - b));
    }
}
