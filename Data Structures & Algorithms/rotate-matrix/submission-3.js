class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        let n = matrix.length;
        for(let layer = 0; layer < Math.floor(n/2); layer++) {
            for(let i = layer; i < n-1-layer; i++) {
                let v1 = matrix[layer][i];
                let v2 = matrix[i][n-1-layer];
                let v3 = matrix[n-1-layer][n-1-i];
                let v4 = matrix[n-1-i][layer];

                matrix[i][n-1-layer] = v1;
                matrix[n-1-layer][n-1-i] = v2;
                matrix[n-1-i][layer] = v3;
                matrix[layer][i] = v4;
            }
        }
        return matrix;
    }
}