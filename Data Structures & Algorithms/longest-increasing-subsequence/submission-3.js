class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        if(!nums || !nums.length) return 0;

        let maxLength = 1;
        const tab = new Array(nums.length).fill(1);
        for(let i = 1; i < tab.length; i++) {
            
            for(let j = i - 1; j >= 0; j--){
                if(nums[j] < nums[i]) {
                    tab[i] = Math.max(tab[i], tab[j] + 1);
                }
            }

            if(tab[i] > maxLength) maxLength = tab[i];
        }

        return maxLength;
    }
}
