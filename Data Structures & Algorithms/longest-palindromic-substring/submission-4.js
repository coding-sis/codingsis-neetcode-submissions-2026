class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        const memo = [];

        let start = -1;
        let maxLength = 0;
        for(let i = s.length - 1; i >= 0; i--) {
            for (let j = i; j < s.length; j++) {
                if (i === j) {
                    memo[i] = [];
                    memo[i][j] = true;
                }
                
                if(s[i] === s[j] && (j - i <= 2 || memo[i+1][j-1])) {
                    memo[i][j] = true;
                    
                    // keep track of new start point when a larger max is detected.
                    if(maxLength < j-i+1) {
                        maxLength = j-i+1;
                        start = i;
                    }
                }
            }
        }

        return s.substring(start, start + maxLength);
    }
}
