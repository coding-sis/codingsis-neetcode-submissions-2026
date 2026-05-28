class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let counter = 0;
        while (n > 0) {
            // check if the rightmost bit is 1
            if (n & 1 === 1) counter++; 
            // drop the rightmost bit by shifting
            n >>= 1; 
        }

        return counter;
    }
}
