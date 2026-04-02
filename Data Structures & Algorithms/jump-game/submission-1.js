class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums, currIndex=0) {
        if(currIndex === nums.length - 1) return true;

        for (let i = currIndex; i < nums.length; i++) {
            if (!nums[i]) return false;
            
                // at least jump 1 i.e., move to the right.
                for(let step = 1; step <= nums[i]; step++) {
                    if (this.canJump(nums, step+i)) {
                        return true;
                    }
                }
            
        }

        return false;
    }
}
