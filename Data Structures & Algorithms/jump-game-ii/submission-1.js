class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let count = 0;

        let currLoc = 0;
        let reachedTo = 0;
        while (reachedTo < nums.length - 1) {
            let maxJump = 0;

            for (let i = currLoc; i <= reachedTo; i++) {
                maxJump = Math.max(maxJump, i + nums[i]);
            }
            currLoc = reachedTo + 1;
            reachedTo = maxJump;

            count++;
        }

        return count;
    }
}
