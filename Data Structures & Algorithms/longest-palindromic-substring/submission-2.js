class Solution {
    longestPalindrome(s) {
        
        let palindrome = "";
        for (let i = 0; i < s.length; i++) {
            for (let j = i; j < s.length; j++){
                // find a palindrome between s_i and s_j
                const pal = this.findPalindrome(s, i, j);
                if (palindrome.length < pal.length){
                    palindrome = pal;
                }
            }
        }
        console.log('longestPalindrome(\'', s , '\');', palindrome);
        return palindrome;
    }

    // Find a palindrome between the i-th and j-th chars in s
    findPalindrome(s, i, j){
        let pal = s.slice(i, j+1);
        
        while(i <= j) {
            if (s[i] !== s[j]) return '';
            i++;
            j--;
        }
        return pal;
    }
}
