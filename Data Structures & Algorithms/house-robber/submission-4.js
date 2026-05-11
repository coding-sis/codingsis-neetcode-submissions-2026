class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(!nums || !nums.length) return 0;
        if(nums.length === 1) return nums[0];

        let memo=[nums[0], Math.max(nums[0], nums[1])];
        for(let i = 2; i < nums.length; i++) {
            const tmpMax = Math.max(memo[i-1], memo[i-2] + nums[i]);
            memo.push(tmpMax)
        }

        return memo.pop();
    }
}