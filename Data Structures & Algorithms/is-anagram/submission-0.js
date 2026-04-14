class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = {};
        for(let c of s) {
            if(!map[c]) map[c] = 1;
            else map[c] += 1;
        }
        for (let c of t) {
            if(!map[c]) return false;
            
            map[c] -= 1;
            if(!map[c]) delete map[c];
        }
        return Object.keys(map).length === 0;
    }
}
