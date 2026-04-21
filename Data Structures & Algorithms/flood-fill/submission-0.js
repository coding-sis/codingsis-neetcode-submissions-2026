class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color, originalColor=image[sr][sc], visited = new Set()) {
        // base case
        if(sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length || visited.has(sr + "," + sc) ||
            image[sr][sc] !== originalColor) return image;

        image[sr][sc] = color;
        visited.add(sr+","+sc);
        this.floodFill(image, sr+1, sc, color, originalColor, visited);
        this.floodFill(image, sr-1, sc, color, originalColor, visited);
        this.floodFill(image, sr, sc+1, color, originalColor, visited);
        this.floodFill(image, sr, sc-1, color, originalColor, visited);
        visited.delete(sr+","+sc);
        return image;
    }
}
