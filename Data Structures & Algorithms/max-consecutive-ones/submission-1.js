class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0;
        let count = 0;
        for(let i = 0; i < nums.length; i++) {
            if (!nums[i]) {
                count = 0;
            } else {
                count += 1;
            }

            max = Math.max(max, count);
        }
        return max;
    }
}
