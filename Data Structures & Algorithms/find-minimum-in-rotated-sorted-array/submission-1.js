class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let i = 0;
        let j = nums.length - 1;

        // if not rotated, return the first element.
        if (nums[i] < nums[j]) return nums[i]; 

        while (i < j) {
            if (j - i === 1) return nums[j];

            const mid = Math.ceil((i+j) / 2);
            if (nums[i] > nums[mid]) {
                j = mid;
            } else {
                i = mid;
            }
        }

        return nums[i];
    }
}
