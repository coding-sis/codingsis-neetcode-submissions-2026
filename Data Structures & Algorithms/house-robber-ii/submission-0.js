class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (!nums.length) return 0;

        // 1. start from the 1st house i.e., skip the last house
        const collected1 = [0, nums[0]];
        for (let i = 2; i < nums.length; i++) {
            collected1.push(
                Math.max(
                    collected1[i - 1],
                    collected1[i - 2] + nums[i - 1]
                )
            );
        }

        // 2. skip the 1st house 
        const collected2 = [0, 0];
        for (let i = 2; i <= nums.length; i++) {
            collected2.push(
                Math.max(
                    collected2[i - 1],
                    collected2[i - 2] + nums[i - 1]
                )
            );
        }

        return Math.max(collected1.at(-1), collected2.at(-1));
    }
}
