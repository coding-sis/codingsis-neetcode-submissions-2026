class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs (n) {
        if(n <= 1) return n;

        let [step1, step2] = [0, 1];
        for(let i = 0; i < n; i++) {
            const tmp = step2;
            [step1, step2] = [tmp, step1 + step2];
        }
        return step2;
    }
}
