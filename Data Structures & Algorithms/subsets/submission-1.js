class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums, i = 0, collected = [], res = [[]]) {
        if (i >= nums.length) return res;

        for(; i < nums.length; i++) {
            // add a collected set to the res 
            collected.push(nums[i]);
            res.push([...collected]); 

            // go to the next element
            this.subsets(nums, i+1, collected, res); 

            // backtrack - pop the number that was collected above 
            collected.pop(); 
        }

        return res;
    }
}
