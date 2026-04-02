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
            let [s, e] = res[res.length - 1];
            let [tmpS, tmpE] = intervals[i];

            if (s <= tmpS && tmpS <= e) {
                res.pop();
                s = Math.min(s, tmpS);
                e = Math.max(e, tmpE);
            } else {
                s = tmpS;
                e = tmpE;
            }

            res.push([s, e]);
        }

        return res;
    }
}
