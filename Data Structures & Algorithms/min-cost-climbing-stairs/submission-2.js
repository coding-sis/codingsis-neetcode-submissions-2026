class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        if(!cost.length) return 0;

        const costTotal = [0, 0];
        if(cost.length > 1) {
            for(let i = 2; i <= cost.length; i++) {
                costTotal[i] = Math.min(
                    costTotal[i-2] + cost[i-2], 
                    costTotal[i-1] + cost[i-1]
                );
            }
        }

        return costTotal.pop();
    }
}
