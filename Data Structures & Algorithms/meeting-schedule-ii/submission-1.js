/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (!intervals || !intervals.length) return 0;

        intervals.sort((a, b) => {
            const fst = a.start - b.start;
            return fst !== 0 ? fst : a.end - b.end;
        });

        let count = 0;
        while(intervals.length) {
            const check = intervals[0];

            for (let i = 1; i < intervals.length; i++) {
                if (check.end <= intervals[i].start) {
                   check.end = Math.max(check.end, intervals[i].end);
                   intervals.splice(i--, 1);
                }
            }

            intervals.splice(0, 1);
            count++;
        }

        return count;
    }
}
