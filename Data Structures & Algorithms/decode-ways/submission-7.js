class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s, i = 0, ways=[]) {
        if(i === s.length) return 1;
        if (s[i] === '0') return 0;

        if(ways[i]) return ways[i];

        let decode = this.numDecodings(s, i+1, ways);

        const num = Number(s[i]+s[i+1]);
        if (num >= 10 && num < 27) {
            decode += this.numDecodings(s, i+2, ways);
        }

        ways[i] = decode; 
        
        return decode;
    }
}
