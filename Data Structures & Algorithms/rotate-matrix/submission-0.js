class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        let [l, r] = [0, matrix.length - 1];

        // replace cells from the outer layer of the matrix
        while (l < r) {
            for (let i = 0; i < r - l; i++) {
                let tmp0 = matrix[l][l + i]; 
                let tmp1 = matrix[l + i][r]; 
                let tmp2 = matrix[r][r-i];
                let tmp3 = matrix[r - i][l]; 

                matrix[l+i][r] = tmp0;
                matrix[r][r-i] = tmp1;
                matrix[r - i][l] = tmp2;
                matrix[l][i + l] = tmp3;
            }

            l++;
            r--;
        }

        return matrix;
    }
}
