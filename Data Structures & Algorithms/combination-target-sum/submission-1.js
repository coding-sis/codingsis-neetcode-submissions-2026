class Solution {

    combinationSum(nums, target, i = 0) {
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
}
