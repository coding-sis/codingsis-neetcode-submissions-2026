class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        m -= 1;
        n -= 1;
        let pos = nums1.length - 1;
        for (; n >= 0; pos--) {
            if (m >= 0 && nums1[m] > nums2[n]) nums1[pos] = nums1[m--];
            else nums1[pos] = nums2[n--];
        }
        return nums1;
    }
}
