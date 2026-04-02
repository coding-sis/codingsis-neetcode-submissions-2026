class Solution {
    canPartition(nums) {
        if (!nums.length) return false;

        const sum = nums.reduce((a, c) => a + c, 0);
        // if the total sum is odd, then it's impossible to partition.
        if (sum % 2 === 1) return false;

        // find if there exists a subset s, where sum(...s) = sum(...array)/2
        const target = sum / 2
        return this.findSumDP(nums, target);
    }

    findSumBacktracking (nums, target, currSum = 0, collected = new Set()) {
        if(currSum === target) return true;
        for(let i = 0; i < nums.length; i++) {
            if (!collected.has(i)) {
                collected.add(i);
                if(this.findSumBacktracking(nums, target, currSum + nums[i], collected)) return true;
                collected.delete(i);
            }
        }
        return false;
    }

    findSumDP(nums, target) {
        let subTargets = new Set([target]);

        for(let i = 0; i < nums.length; i++) {
            let updated = new Set();

            for (const t of subTargets) {
                // That is, subTarget - nums[i] === 0, hence, return true;
                if (t === nums[i]) return true;

                // 1. a case of including the i-th num to the target sum calculation
                // Note that t - nums[i] needs to be still a positive number.
                if(t > nums[i]) updated.add(t - nums[i]);

                // 2. a case of excluing the ith-num to the target sum calculation
                updated.add(t);
            }
            subTargets = updated;
        }

        return false;
    }
}
