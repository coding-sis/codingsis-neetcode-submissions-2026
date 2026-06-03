class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;

        while(left < right) {
            if (nums[left] < nums[right]) break;

            let mid = Math.floor((right + left) / 2);
            if (nums[left] > nums[mid]) right = mid;
            else left = mid+1;
        }
        
        return nums[left];
    }
}
