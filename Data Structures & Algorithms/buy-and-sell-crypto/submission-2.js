class Solution {
    /**
     * @param {number} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
    let maxSellPrice = prices[prices.length - 1];

    // iterate the prices in REVERSE order
    for(let sell = prices.length - 2; sell >= 0; sell--){
        const p = prices[sell];
        if (p > maxSellPrice) maxSellPrice = p;

        const currProfit = maxSellPrice - p;
        if(currProfit > maxProfit) maxProfit = currProfit;
    }

    return maxProfit;
    }
}
