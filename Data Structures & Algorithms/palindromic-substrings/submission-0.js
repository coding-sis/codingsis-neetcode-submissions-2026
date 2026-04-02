class Solution {
    /**
     * @param {string} s
     * @return {number} the number of substrings within s that are palindromes.
     */
    countSubstrings(s) {
        if(!s || !s.length) return 0;

        let count = 1; // a starting value for the last char
        for(let i = s.length - 2; i >=0; i--) {
            for (let j = i; j < s.length; j++) {
                if (this.isPalindrome(s, i, j)) {
                    count += 1;
                }
            }
        }

        return count;
    }

    isPalindrome(s, i = 0, j = s.length - 1) {
        while(i < j) {
            if(s[i++] !== s[j--]) return false;
        }
        return true;
    }
}
