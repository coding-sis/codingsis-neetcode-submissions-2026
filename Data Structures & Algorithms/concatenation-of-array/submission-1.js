class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const n = nums.length;

        const ans = new Array(2 * n); 
        for(let i= 0; i < n; i++) {
            ans[i] = ans[i+n] = nums[i];
        }
        return ans;
    }
}