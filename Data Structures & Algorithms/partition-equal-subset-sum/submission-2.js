class Solution {
    canPartition(nums) {
        if (!nums.length) return false;

        const sum = nums.reduce((a, c) => a + c, 0);
        // if the total sum is odd, then it's impossible to partition.
        if (sum % 2 === 1) return false;

        // find if there exists a subset s, where sum(...s) = sum(...array)/2
        const target = sum / 2
        return this.findSumBacktracking(nums, target);
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

    findSumDPRecursive(nums, target, i = 0, collectedSums = new Set([0])) {
        if(i === nums.length) {
            return collectedSums.has(target);
        }

        for(const s of collectedSums) {
            collectedSums.add(nums[i]);
            if(this.findSumDPRecursive(nums, target, i+1, collectedSums)) {
                return true;
            }

            collectedSums.add(s + nums[i]);
            if(this.findSumDPRecursive(nums, target - nums[i], i+1,collectedSums)) {
                return true;
            }
        }
        return false;

    }
}
