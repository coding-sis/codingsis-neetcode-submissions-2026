// https://neetcode.io/problems/pacific-atlantic-water-flow/question?list=blind75

class Solution {
    /** 
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const res = [];
        for(let r = 0; r < heights.length; r++) {
            for(let c = 0; c < heights[0].length; c++) {
                const reached = new Set();
                const visited = new Set();
                this.reachedTo(heights, r, c, heights[r][c], reached, visited);
                if(reached.has("p") && reached.has("a")) {
                    res.push([r, c]);
                }
            }
        }
        return res;
    }

    // check if a cell of [r, c] can flow both to Pacific and Atlantic
    reachedTo(heights, r, c, height, reached, visited) {
        if (r < 0 || c < 0 || r === heights.length || c === heights[0].length) {
            if (r < 0 || c < 0) reached.add("p");
            if (r === heights.length || c === heights[0].length) reached.add("a");
            return;
        }

        const key = `${r},${c}`;
        if (heights[r][c] > height || visited.has(key)) return;

        const h = heights[r][c];
        visited.add(key);
        this.reachedTo(heights, r-1, c, h, reached, visited);
        if(reached.has("p") && reached.has("a")) return;
        this.reachedTo(heights, r+1, c, h, reached, visited);
        if(reached.has("p") && reached.has("a")) return;
        this.reachedTo(heights, r, c-1, h, reached, visited);
        if(reached.has("p") && reached.has("a")) return;
        this.reachedTo(heights, r, c+1, h, reached, visited);
        if(reached.has("p") && reached.has("a")) return;
    }

}