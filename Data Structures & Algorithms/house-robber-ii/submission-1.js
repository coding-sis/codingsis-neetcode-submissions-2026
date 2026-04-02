class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
if (!nums.length) return 0;

        // 1. start robbing from the 1st house up to the 2nd last house
        let collect1 = 0; 
        let collect2 = nums[0];
        for (let i = 2; i < nums.length; i++) {
            const tmp = collect2;
            collect2 = Math.max(
                collect1 + nums[i-1],
                collect2,
            );
            collect1 = tmp;
        }

        // 2. start robbing from the 2nd house
        let collect3 = 0;
        let collect4 = 0;
        for (let i = 2; i <= nums.length; i++) {
            const tmp = collect4;
            collect4 = Math.max(
                collect3 + nums[i-1],
                collect4,
            );
            collect3 = tmp;
        }

        // compare the 2 final values from the two computations above.
        return Math.max(collect2, collect4);
    }
}
