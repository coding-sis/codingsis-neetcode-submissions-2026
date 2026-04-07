class Solution {

    combinationSumOld(nums, target, i = 0) {
        const answer = [];
        if (target < 0) return answer;
        if (target === 0) return [[]];

        nums.forEach((n, j) => {
            if (j >= i && target >= n) {
                const combinations = this.combinationSum(nums, target - n, j);  
                combinations.forEach(c => {
                    answer.push([n, ...c])
                });
            } 
        });

        return answer;
    }

    combinationSum(nums, target, i = 0, collected = [], answer = []){
        if (target < 0) return [];
        if (target === 0) {
            answer.push([...collected]);
            return answer;
        }

        for(; i < nums.length; i++) {
            const e = nums[i];
            // if(e > target) break; // prune earlier
            collected.push(e);
            
            this.combinationSum(nums, target - e, i, collected, answer);
            
            collected.pop();
        }

        return answer;
    }
}
