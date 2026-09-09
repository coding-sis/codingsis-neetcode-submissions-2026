class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        
        while (b !== 0) {
            let carry = (a & b) << 1;

            // compute the sum without carry
            a ^= b;

            b = carry;
        }

        return a;
    }

}
