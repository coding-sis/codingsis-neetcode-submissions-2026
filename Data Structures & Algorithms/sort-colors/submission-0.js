class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const bucket = [0, 0, 0]; // initial bucket - 0 per each color
        for(let elem of nums) {
            bucket[elem] += 1;
        }

        let pos = 0;
        for(let elem = 0; elem < 3; elem++) {
            for(let j = 0; j < bucket[elem]; j++) {
                nums[pos++] = elem;
            }
        }
    }
}
