class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(rows, cols) {
        let currRow = Array(cols).fill(1); 

        for (let r = rows-2; r >= 0; r--) {
            const prevRow = [...currRow];
            currRow = Array(cols).fill(1);
            for (let c = cols-2; c >= 0; c--) {
                currRow[c] = prevRow[c] + currRow[c+1];
            }
        }
        return currRow[0];
    }
}
