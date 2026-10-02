class Solution {
    /**
     * @param {number[]} candidates all positive int array, which may contain duplicates
     * @param {number} target int >= 0
     * @return {number[][]} a list of all unique combinations of candidates where the chosen numbers sum to target. 
     * Each element from candidates may be chosen AT MOST once within a combination. 
     * The solution set must not contain duplicate combinations.
     * You may return the combinations in any order and the order of the numbers in each combination can be in any order.
    */
    combinationSum2(candidates, target) {
        // sort the input array and filter the elements only those <= target.
        candidates.sort((a, b) => a-b);
        candidates = candidates.filter(v => v <= target); 

        const res = [];
        this.collect(candidates, target, res);
        return res;
    }

    collect(candidates, target, res, start = 0, sum = 0, collected = []) {
        if (target === sum) {
            res.push([...collected]);
            return;
        }

        // dfs to add up more numbers to the collection
        for (let i = start; i < candidates.length; i++) {
            // If the i-th elem is equal to the prev elem, may skip
            if (i > start && candidates[i] === candidates[i-1]) {
                continue;
            }

            // a sanity check prior to starting a new traversal
            const newSum = sum + candidates[i];
            if (newSum > target) break; 

            // The backtracking DFS to the next layer (i+1)
            collected.push(candidates[i]);
            this.collect(candidates, target, res, i+1, newSum, collected);
            collected.pop();
        }
    }
}
