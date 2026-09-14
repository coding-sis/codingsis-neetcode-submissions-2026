class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let [s, e] = [0, heights.length - 1];
        let amount = (heights.length - 1) * Math.min(heights[s], heights[e]);
        
        while (s < e) {
            if (heights[s] < heights[e]) {
                s++; // move s to find a higher bar 
            } else if(heights[s] > heights[e]) {
                e--; // move e to find a higher bar
            } else {
                // move both
                s++;
                e--;
            }

            // keep track of the max amount
            amount = Math.max(amount, (e - s) * Math.min(heights[s], heights[e]));
        }
        return amount;
    }
}
