class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs (n, memo=[0, 1, 2]) {
        if(memo[n] !== undefined) return memo[n];

        memo[n] = this.climbStairs(n-1, memo) + this.climbStairs(n-2, memo);
        return memo[n];
    }
}
