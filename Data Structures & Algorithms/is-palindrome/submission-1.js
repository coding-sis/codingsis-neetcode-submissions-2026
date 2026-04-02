class Solution {
    getAlphaNumericValue(char) {
        const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        if (!letters.includes(char)) return undefined;
        return char.toUpperCase();
    }

    // A palindrome is a string that reads the same forward and backward. 
    // It is also case-insensitive and ignores all non-alphanumeric characters.
    // Given a string s, return true, if it's a palindrome.
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            let charL = this.getAlphaNumericValue(s.charAt(left));
            let charR = this.getAlphaNumericValue(s.charAt(right));

            if(charL !== undefined && charR !== undefined && charL !== charR) return false;

            if (charL === charR) {
                left++;
                right--;
            } else if(charL === undefined) {
                left++;
            } else {
                right--;
            }
        }

        return true;
    }
}
