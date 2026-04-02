class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let count = 0;
        while (n > 0) {
            let remainder = n % 2;
            if (remainder === 1) count++;

            n = (n - remainder) / 2;
        }
        return count;
    }
}
