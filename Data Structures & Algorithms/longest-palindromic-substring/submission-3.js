class Solution {
    // 1. decrease the gap between two pointers
    longestPalindrome1(s) {
        let palindrome = "";
        for (let i = 0; i < s.length; i++) {
            for (let j = i; j < s.length; j++) {
                // find a palindrome between s_i and s_j
                const pal = this.findPalindrome(s, i, j);
                
                // update the palindrome by checking the string length
                if (palindrome.length < pal.length) {
                    palindrome = pal;
                }
            }
        }

        return palindrome;
    }

    // Find a palindrome between the i-th and j-th chars in s
    findPalindrome1(s, i, j) {
        let pal = s.slice(i, j + 1);

        while (i <= j) {
            if (s[i++] !== s[j--]) return '';
        }
        return pal;
    }

    // 2. increase the gap between two points 
    longestPalindrome(s) {
        let palindrome = '';

        for (let center = 0; center < s.length; center++) {
            // 1. expand the search from s[center] 
            const oddPal = this.findPalindrome(s, center, center);

            // 2. expand the search from s[center], s[center+1]
            const evenPal = center === s.length - 1 ? undefined : this.findPalindrome(s, center, center + 1);

            // 3. Keep a palindrom with the max length while iterating
            if (palindrome.length < oddPal.length) palindrome = oddPal;
            if (evenPal && palindrome.length < evenPal.length) palindrome = evenPal;
        }
        
        return palindrome;
    }

    findPalindrome(s, c1, c2) {
        if(s[c1] !== s[c2]) return '';

        while (s[c1] === s[c2] && c1 >= 0 && c2 < s.length) {
            c1--;
            c2++;
        }

        return s.substring(c1+1, c2);
    }
}
