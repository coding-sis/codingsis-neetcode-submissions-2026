class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = nums;
        for(let i in nums) {
            ans.push(nums[i]);
        }
        return ans;
    }
}