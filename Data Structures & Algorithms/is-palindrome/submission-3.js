class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (!s || !s.length) return true;

        s = s.trim();
        let l = 0;
        let r = s.length-1;
        while(l <= r) {
            const cLeft = s[l].toLocaleLowerCase();
            const cRight = s[r].toLocaleLowerCase();
            
            // check both cLeft and cRight are alphanumeric.
            if(!/^[a-z0-9]$/i.test(cLeft)) {
                l++;
            } else if(!/^[a-z0-9]$/i.test(cRight)) {
                r--;
            }else if (cLeft === cRight) {
                l++;
                r--;
            } else {
                return false;
            } 
            
        }
        return true;
    }
}
