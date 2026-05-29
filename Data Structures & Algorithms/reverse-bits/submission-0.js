class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let r = 0;
        for(let b = 0; b <= 31; b++) {
            let i = n & 1;
            r += (i << (31 - b));

            n >>>= 1;
        }

        return r >>> 0;
    }
}
