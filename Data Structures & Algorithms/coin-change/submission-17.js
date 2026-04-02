class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange (coins, amount) {
        const memo = Array(amount + 1).fill(undefined);
        memo[0] = 0;

        for (let a = 1; a <= amount; a++) {

            // keep tracking the minNum for each coin denomination
            let minNum = Number.POSITIVE_INFINITY;
            for(let c of coins) {
                if (a >= c && memo[a-c] < minNum) {
                    minNum = memo[a-c];
                    memo[a] = minNum + 1;
                }
            }
            
        }

        return memo[amount] !== 0 && !memo[amount]? -1: memo[amount];
    }
}
