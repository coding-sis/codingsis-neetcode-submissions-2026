class Solution {
    helper(matrix, target, numCols, start, end) {
        if(!matrix || !matrix.length || !matrix[0].length)  return false;

    if(end === undefined) end = matrix.length * matrix[0].length - 1;
    if(start > end) return false;
    
    // find a mid in the flatten structure
    const mid = start + Math.floor((end-start)/2); 
    // transform the mid into a 2D cell position (row x col)
    if(numCols === undefined) numCols = matrix[0].length;
    const [r, c] = [Math.floor(mid / numCols), mid % numCols]; 

    // binary search style
    if(matrix[r][c] === target) return true;

    if(matrix[r][c] > target) return this.helper(matrix, target, numCols, start, mid-1);
    return this.helper(matrix, target, numCols, mid+1, end); 
    }

    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        return this.helper(matrix, target, undefined, 0, undefined);
    }
}
