class Solution {
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;

        while(left < right) {
            // check in case the given input array is not rotated (or fully rotated)
            if (nums[left] < nums[right]) return nums[left];

            let mid = Math.floor((right + left) / 2);

            // find the rotated part in the original input array
            // and adjust the left/right pointers
            if (nums[left] > nums[mid]) right = mid;
            else left = mid+1;
        }
        
        return nums[left];
    }
}