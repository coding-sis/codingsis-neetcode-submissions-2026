class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange (coins, amount, memo = Array(amount+1).fill(undefined)) {
        if(amount <= 0) return 0;

        if(memo[amount] !== undefined) return memo[amount];

        let minNum = Number.POSITIVE_INFINITY;
        for(let c of coins) {
            if (amount >= c) {
                let num = this.coinChange(coins, amount - c, memo);            
                if (num >= 0 && num + 1 < minNum) {
                    minNum = num + 1;
                }
                // memo[amount - c] = minNum;
            } 
        }
        memo[amount] = minNum === Number.POSITIVE_INFINITY? -1: minNum;
        return memo[amount];
    }
}
