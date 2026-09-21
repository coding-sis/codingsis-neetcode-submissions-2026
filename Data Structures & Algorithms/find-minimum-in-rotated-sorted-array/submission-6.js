class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let i = 0;
        let j = nums.length - 1;

        while (i < j) {
            // if not rotated, return the first element in the given range [i ... j]
            if (nums[i] < nums[j]) return nums[i];

            const mid = Math.floor((i+j) / 2);
            if (nums[i] > nums[mid]) {
                j = mid;
            } else {
                i = mid + 1;
            }
        }

        return nums[i];
    }
}
