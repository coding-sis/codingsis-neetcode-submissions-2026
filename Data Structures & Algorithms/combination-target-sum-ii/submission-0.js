class Solution {
    
    helper(sortedNums, target, res = [], combination = [], currPos = 0){
        if (target === 0) {
            res.push([...combination]);
            return res;
        }

        for(let i = currPos; i < sortedNums.length; i++) {
            if (i > currPos) {
                // once found all the combinations including sortedNums[currPos] i.e., i > currPos
                // jump to a following bigger number > sortedNums[currPos];
                i = sortedNums.findIndex(n => n > sortedNums[i-1]);
                if (i === -1) return res;
            }

            const val = sortedNums[i];
            if (val <= target){
                combination.push(val);
                // used.add(i);

                this.helper(sortedNums, target - val, res, combination, i+1);

                // used.delete(i);
                combination.pop();
            }
        }

        return res;
    }

    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);
        return this.helper(candidates, target);
    }
}
