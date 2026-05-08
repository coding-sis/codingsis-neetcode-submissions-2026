class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs (n, memo=[0, 1, 2]) {
        // top-bottom
        if(memo[n] !== undefined) return memo[n];

        memo[n] = this.climbStairs(n-1, memo) + this.climbStairs(n-2, memo);
        return memo[n];

        // bottom-up
        /*
        if(n <= 1) return n;

        let [step1, step2] = [0, 1];
        for(let i = 0; i < n; i++) {
            const tmp = step2;
            [step1, step2] = [tmp, step1 + step2];
        }
        return step2;
        */
    }
}
