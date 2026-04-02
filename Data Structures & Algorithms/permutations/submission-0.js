class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        if (!nums || !nums.length) return []; // sanity check
        if (nums.length === 1) return [nums];

        const res = [];
        while (nums.length) {
            const n = nums.pop();

            const subPerms = this.permute(nums);
        for (const p of subPerms) {
            // distribute n into each elem of subPerms
            for (let i = 0; i <= p.length; i++) {
                const newPerm = [...p];
                newPerm.splice(i, 0, n);
                res.push(newPerm);
            }
        }
    }

    return res;
    }
}
