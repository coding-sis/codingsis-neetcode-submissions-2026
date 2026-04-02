class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        if (nums.length <= 1) return nums.length;

        // Recall that the problem requires us to do this in-place.
        // Hence, create a variable to track of the latest unique element's position in the array.
        let latestUniquePos = 0; 
        for (let i = 1; i < nums.length; i++) {
            if (nums[latestUniquePos] !== nums[i]) {
                // update the latest unique element's index and set the new unique value
                nums[++latestUniquePos] = nums[i];
            }
        }
        return latestUniquePos + 1;
    }
}
