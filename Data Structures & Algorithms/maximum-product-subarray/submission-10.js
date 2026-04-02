class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
       let maxProduct = nums[0];
        let currMaxProd = nums[0];
        let currMinProd = nums[0];
        for(let i = 1; i < nums.length; i++) {
            const currMaxProdTmp = currMaxProd;
            currMaxProd = Math.max(nums[i], currMinProd * nums[i], currMaxProd * nums[i]);
            currMinProd = Math.min(nums[i], currMaxProdTmp * nums[i], currMinProd * nums[i]);

            maxProduct = Math.max(currMaxProd, maxProduct)
        }

        return maxProduct;
    }
}
