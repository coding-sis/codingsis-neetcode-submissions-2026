class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const expected = (nums.length * (nums.length + 1))/2;
        const sum = nums.reduce((accm, n) => accm + n, 0);

        return expected - sum;
    }
}