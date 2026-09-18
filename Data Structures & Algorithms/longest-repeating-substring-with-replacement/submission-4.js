class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxLen = 0;

        const map = new Map();
        let fCharCount = 0; 
        let i = 0;
        for (let j = 0; j < s.length; j++) {
            map.set(s[j], !map.get(s[j])? 1 : map.get(s[j]) + 1);
            fCharCount = Math.max(fCharCount, map.get(s[j]));

            if (j-i+1 - fCharCount > k) {
                map.set(s[i], map.get(s[i]) - 1);
                i++;
            }

            // track the maxLen by comparing the maxLen and current window size
            maxLen = Math.max(maxLen, j-i+1);

        }
        return maxLen;
    }
}
