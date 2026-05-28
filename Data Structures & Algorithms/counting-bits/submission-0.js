class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const res = [0];

        for (let i = 1; i <= n; i++) {
            let count = 0;
            let j = i;
            while(j > 0) {
                if (j&1 === 1) count++;
                j >>= 1;
            }

            res.push(count);
        }

        return res;
    }
}
