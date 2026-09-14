class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
       let [amount, s, e] = [0, 0, heights.length - 1];
        while (s < e) {
            amount = Math.max(amount, (e - s) * Math.min(heights[s], heights[e]));

            if (heights[s] <= heights[e]) s++; 
            else e--;
        }
        return amount;
    }
}
