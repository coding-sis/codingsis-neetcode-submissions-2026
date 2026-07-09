class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = -Infinity;

        let currSum = 0;
        for(let n of nums) {
            currSum += n;

            maxSum = Math.max(currSum, maxSum);
            if (currSum < 0) currSum = 0;
        }

        return maxSum;
    }
}
