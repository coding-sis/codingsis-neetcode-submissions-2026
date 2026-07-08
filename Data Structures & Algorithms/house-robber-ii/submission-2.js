class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(!nums || !nums.length) return 0;

        let trueKey = "0:true";
        let falseKey = "0:false";
        const memo = {
            "0:true" : nums[0],
            "0:false" : 0
        };

        // fill in memo with for each case using values of the previous index
        for(let i = 1; i < nums.length; i++) {
            trueKey = i + ':true';
            falseKey = i + ':false';

            // true lines
            const trueTmp = memo[(i-2)+ ":true"] || 0;
            if(i === 1) {
                // remember that the first house is robbed, so nums[1] should be skipped
                memo[trueKey] = memo['0:true'];
            } else if (i === nums.length - 1) {
                // remember that the first house has been robbed, so the last house cannot be robbed
                memo[trueKey] = memo[(i-1) + ":true"];
            } else memo[trueKey] = Math.max(trueTmp+nums[i], memo[(i-1)+":true"]);
            
            // false lines
            const falseTmp = memo[(i-2)+ ":false"] || 0;
            memo[falseKey] = Math.max(falseTmp + nums[i], memo[(i-1) + ":false"]);
        }

        // once reached to the end, get the max value based on the values on memo map
        return Math.max(memo[trueKey], memo[falseKey]);
    }
}
