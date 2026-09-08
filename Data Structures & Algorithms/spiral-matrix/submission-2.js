class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        let topRow = 0;
        let bottomRow = matrix.length - 1;
        let rightCol = matrix[0].length - 1;
        let leftCol = 0;

        const res = [];
        while (topRow <= bottomRow || leftCol <= rightCol) {
            // 1. travel cells in the topRow
            for (let i = leftCol; i <= rightCol; i++) {
                res.push(matrix[topRow][i]);
            }
            if (topRow === bottomRow) break;
            topRow++;
            

            // 2. travel cells in the rightCol
            for (let i = topRow; i <= bottomRow; i++) {
                res.push(matrix[i][rightCol]);
            }
            if (leftCol === rightCol) break;
            rightCol--;

            // 3. travel cells in the bottomRow
            for(let i = rightCol; i >= leftCol; i--) {
                res.push(matrix[bottomRow][i]);
            }
            if(topRow === bottomRow) break;
            bottomRow--;

            

            // 4. travel cells in the leftCol
            for(let i = bottomRow; i >= topRow; i--) {
                res.push(matrix[i][leftCol]);
            }
            if (leftCol === rightCol) break;
            leftCol++;

            
            
        }
        return res;
    }
}
