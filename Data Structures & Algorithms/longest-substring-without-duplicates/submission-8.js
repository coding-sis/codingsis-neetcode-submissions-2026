class Solution {
    /**
     * Given a string s, find the length of the longest substring without duplicate characters.
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // sanity check
        if (!s || !s.length) return 0;

        let maxLen = 0;
        let l = 0;
        let trackingMap = new Map();
        for (let r = 0; r < s.length; r++) {
            if(trackingMap.has(s[r])) {
                maxLen = Math.max(maxLen, trackingMap.size);
                // update the trackingMap
                for(let i = l; i < trackingMap.get(s[r]); i++) {
                    trackingMap.delete(s[i]);
                }
                l = trackingMap.get(s[r]) + 1;
            } 

            trackingMap.set(s[r], r);
        }

        return Math.max(maxLen, trackingMap.size);
    }
}