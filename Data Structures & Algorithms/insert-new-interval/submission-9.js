class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insertOLD(intervals, newInterval) {
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
            if (s <= end && end <= e || end < s || j === intervals.length - 1) {
                if (s <= end && end <= e) end = e;
                break;
            }
        }

        const numToDelete = intervals[j][0] < end ? j - i + 1 : j - i;
        intervals.splice(i, numToDelete, [start, end]);
        return intervals;
    }

    insert(intervals, newInterval) {
        let [start, end] = newInterval;

        if (end < start) return intervals; // not a valid input to insert to the given intervals array

        // if (!intervals || !intervals.length) return [newInterval];

        // Recall the intervals are sorted
        let startIndex = undefined;
        let toMerge = 0;
        for (let i = 0; i < intervals.length; i++) {
            if (start > intervals[i][1]) continue;

            if (startIndex === undefined && start <= intervals[i][1]) {
                start = Math.min(start, intervals[i][0]);
                startIndex = i;
            }

            if (intervals[i][1] < end) {
                toMerge++;
            } else if (end < intervals[i][0]) {
                break;
            } else if (end <= intervals[i][1]) {
                end = intervals[i][1];   
                toMerge++;             
                break;
            } 
        }

        if (startIndex!== undefined) intervals.splice(startIndex, toMerge, [start, end]);
        else intervals.push([start, end]);
        return intervals;
    }
}
