class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(str1, str2) {
        const memo = Array(str2.length+1).fill(0);
        for(let i = 1; i <= str1.length; i++) {
            let prev = 0;

            for(let j = 1; j <= str2.length; j++) {
                const [c1, c2] = [str1[i-1], str2[j-1]];

                let tmp = memo[j];
                if(c1 === c2) {
                    memo[j] = 1 + prev;
                } else {
                    memo[j] = Math.max(memo[j], memo[j-1]);
                }
                prev = tmp;
            }
        }
        return memo.pop();
    }
}
