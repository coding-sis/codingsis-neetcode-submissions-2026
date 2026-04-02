class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const row = Array.from(new Array(n), () => 1);  // start the initial row cells with all 1s 
        for(let i = 1; i < m; i++){
            for (let j = 1; j < n; j++){
                row[j] = row[j-1] + row[j];
            }
        }

        return row[n-1];
    }
}
