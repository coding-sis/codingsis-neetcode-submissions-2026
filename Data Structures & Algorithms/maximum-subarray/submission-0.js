class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = Number.NEGATIVE_INFINITY;

        for(let start = 0; start < nums.length; start++) {
            let tempSum = nums[start];
            let sum = nums[start];
            // keep track of all contiguous-elem sums starting from nums[start ... end]
            for (let end = start+1; end < nums.length; end++) {
                sum += nums[end]; 
                tempSum = Math.max(sum, tempSum);
            }
            max = Math.max(max, tempSum);
        }
        return max;
    }
}
