class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        // sanity checks
        if (!intervals || !intervals.length) return [newInterval];
        let [start, end] = newInterval;
        if (start > end) return intervals;

        let i = 0;
        for (; i < intervals.length; i++) {
            const [s, e] = intervals[i];
            if (s <= start && start <= e || start <= s) {
                start = Math.min(s, start);
                break;
            }
        }

        if (i === intervals.length) {
            intervals.push(newInterval)
            return intervals;
        }

        let j = i;
        for (; j < intervals.length; j++) {
            const [s, e] = intervals[j];
            if (s <= end && end <= e || end < s) {
                if (end >= s) end = e;
                break;
            }
        }

        if(j === intervals.length) j = intervals.length - 1;
        const numToDelete = intervals[j][0] < end ? j - i + 1 : j - i;
        intervals.splice(i, numToDelete, [start, end]);
        return intervals;
    }
}
