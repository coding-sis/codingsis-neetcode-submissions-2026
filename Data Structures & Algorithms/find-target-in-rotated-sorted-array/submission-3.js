class Solution {
    /**
     * @param {number[]} nums, rotated sorted array. You may assume all elements in the sorted rotated array nums are unique.
     * @param {number} target
     * @return {number} the index of target within nums, or -1 if not found.
     */
    search(nums, target, l = 0, r = nums.length - 1) {
        if (!nums || !nums.length || l > r) return -1;

        const m = Math.floor((l+r) / 2);
        if(nums[m] === target) return m;

        const left = nums[l];
        const right = nums[r];
        const mid = nums[m];
        // Recall all elements in the sorted rotated array nums are unique,
        if (left < right) {
            // nums[l] ... nums[r] is not rotated
            return target < mid ?
                this.search(nums, target, l, m-1):
                this.search(nums, target, m+1, r);
        }

        // nums[l] ... nums[r] is rotated somewhere.
        if (left > mid && mid < right) {
            // case 1 : rotating point is in between l and m
            return mid < target && target <= right? 
            this.search(nums, target, m+1, r):
            this.search(nums,target, l, m-1);
        }

        // case 2 : rotating point is in between m and r
        return left <= target && target < mid?
            this.search(nums, target, l, m-1):
            this.search(nums, target, m+1, r);        
    }
}