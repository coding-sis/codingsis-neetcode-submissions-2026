class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let maxProduct = Number.NEGATIVE_INFINITY;
        
        for (let start = 0; start < nums.length; start++) {
            let tmpProduct = 1;

            for (let end = start; end < nums.length; end++) {
                tmpProduct *= nums[end];
                maxProduct = Math.max(maxProduct, tmpProduct);
            }
        }

        return maxProduct;
    }
}
