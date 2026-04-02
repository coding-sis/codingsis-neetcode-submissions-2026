class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        if (!intervals || !intervals.length) {
            return 0;
        }

        intervals.sort((a, b) => {
            const fst = a[0] - b[0];
            return fst !== 0 ? fst: a[1] - b[1];
        });
    
        let count = 0;
        let covered = intervals[0];
        // Note the intervals are sorted at this point.
        for (let i = 1; i < intervals.length; i++) {
            const [s, e] = intervals[i];
            if (s >= covered[1]) { 
                covered[1] = e;
            } else {
                count++;
                covered[1] = Math.min(e, covered[1]);
            }
        }

        return count;
    }
}
