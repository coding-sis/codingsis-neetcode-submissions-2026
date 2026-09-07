class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if (intervals.length <= 1) return intervals;

        // 1. sort the intervals by start_i and end_i in increasing order
        /*intervals.sort((a, b) => {
            if (a[0] < b[0]) return -1;
            if (a[0] > b[0]) return 1;
            if (a[1] < b[1]) return -1;
            return a[1] > b[1]? 1: 0;
        });*/
        intervals.sort((a, b) => a[0] - b[0]);

        // 2. merge the the sorted intervals
        const res = [intervals[0]];
        for(let i = 1; i < intervals.length; i++) {
            const [s1, e1] = res[res.length - 1];
            const [s2, e2] = intervals[i];

            if (s1 <= s2 && s2 <= e1) {
                // expand the interval range
                res[res.length-1] = [ Math.min(s1, s2), Math.max(e1, e2)];
            } else {
                // add the new starting point
                res.push([s2, e2]);
            } 
        }

        return res;
    }
}
