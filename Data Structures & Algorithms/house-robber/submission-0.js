class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 0) return 0;
      
        const collectedSum = [0, nums[0]];

        for(let i = 2; i <= nums.length; i++) {
            collectedSum.push(
                Math.max(
                    collectedSum[i-1], 
                    collectedSum[i-2] + nums[i-1]
                )
            );
        }

        return collectedSum.at(-1);
    }
}
