class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        const memo = Array(nums.length).fill(Array(nums.length).fill(undefined));

        let maxProduct = Number.NEGATIVE_INFINITY;
        for(let i = 0; i < nums.length; i++) {
            const row = memo[i];
            for(let j = i; j < nums.length; j++) {
                if(i === j) {
                    row[j] = nums[j];
                } else {
                    row[j] = row[j-1] * nums[j];
                }

                if (row[j] > maxProduct) maxProduct = row[j] === -0? 0: row[j];
            }
        }

        return maxProduct;
    }
}
