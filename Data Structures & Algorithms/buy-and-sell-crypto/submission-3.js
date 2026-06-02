class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        for(let i = 0; i < prices.length; i++) {
            const price = prices[i];
            for(let j = i+1; j < prices.length; j++) {
                const profit = prices[j] - price;
                maxProfit = Math.max(profit, maxProfit);
            }
        }
        return maxProfit;
    }
}
