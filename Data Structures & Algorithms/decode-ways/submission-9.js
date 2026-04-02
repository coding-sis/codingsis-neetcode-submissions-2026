class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const ways = new Array(s.length).fill(undefined);
        ways.push(1); // the first base case in the recursive DP

        for (let i = s.length - 1; i >= 0; i--) {
            
            ways[i] = s[i] === '0' ? 0 : ways[i + 1];

            if (s[i + 1]) {
                const num = Number(s[i] + s[i + 1]);
                if (num > 9 && num < 27) {
                    ways[i] += ways[i + 2]
                }
            }
        }
        return ways[0];
    }
}
