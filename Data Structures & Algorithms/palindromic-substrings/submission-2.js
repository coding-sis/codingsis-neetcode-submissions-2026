class Solution {
    /**
     * @param {string} s
     * @return {number} the number of substrings within s that are palindromes.
     */
    countSubstrings(s){
        let count = 0;

        for(let center = 0; center < s.length; center++) {
            const even = this.palindromeCheckAt(s, center);
            const odd = this.palindromeCheckAt(s, center, center + 1);
            count += (even + odd);
        }

        return count;
    }

    palindromeCheckAt(s, left, right = left) {
        let count = 0;
        while(left >= 0 && right < s.length) {
            if (s[left--] !== s[right++]) break;
            count++;
        }
        return count;
    }
}
