class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if (!intervals || !intervals.length) {
            return [];
        }

        intervals.sort((a, b) => a[0] - b[0]);
        const res = [intervals[0]];

        for (let i = 1; i < intervals.length; i++) {
            const [s, e] = res[res.length - 1];
            const [tmpS, tmpE] = intervals[i];

            if (s <= tmpS && tmpS <= e) {
                res[res.length - 1] = [Math.min(s, tmpS), Math.max(e, tmpE)];
            } else {
                res.push([tmpS, tmpE]);
            }

        }

        return res;
    }
}
