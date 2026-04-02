class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s, i = 0, ways = []) {
        // base cases
    if (i === s.length) return 1;
    if (s[i] === '0') return 0;
    if (ways[i]) return ways[i];

    let decode1 = this.numDecodings(s, i+1);
    
    const num = Number(s[i]+s[i+1]);
    if(num >= 10 && num < 27) {
        const decode2 = this.numDecodings(s, i+2);
        decode1 += decode2;
    }
    ways[i] = decode1;
    
    return decode1;
    }
}
