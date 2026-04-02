class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let redPtr = 0;
    let bluePtr = nums.length -1;

    let i = 0;
    // recall that nums[bluePtr ... end] is supposed to be all 2s.
    while(i <= bluePtr) {
        const val = nums[i];
        if(val === 2) {
            [nums[bluePtr], nums[i]] = [nums[i], nums[bluePtr]]
            bluePtr--;
        } else {
            if (val === 0) {
                [nums[redPtr], nums[i]] = [nums[i], nums[redPtr]]
                redPtr++;
            } 
            i++;
        }
    }

    return nums;
    }
}
