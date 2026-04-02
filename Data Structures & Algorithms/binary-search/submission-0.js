class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if (target < nums[0] || target > nums[nums.length - 1]) {
        return -1;
    }

    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        let mid = Math.floor((left + right)/2);

        if (nums[mid] === target) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid-1;
        } else {
            left = mid+1;
        }
    }

    return -1;
    }
}
