class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit1(prices) {
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

    maxProfit(prices) {
        let maxPrice = 0;
        let maxProfit = 0;
        for(let i = prices.length - 1; i >= 0; i--) {
            maxPrice = Math.max(maxPrice, prices[i]);

            const currProfit = maxPrice - prices[i];
            maxProfit = Math.max(maxProfit, currProfit);
        }
        return maxProfit;
    }
}
