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
     * @returns {boolean}
     */
     canAttendMeetings(intervals) {
        if(!intervals || !intervals.length) return true;

        intervals.sort((a, b) => {
            const fst = a.start - b.start;
            return fst !== 0 ? fst: a.end - b.end;
        });

        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i].start < intervals[i-1].end)  return false;            
        }

        return true;
    }
}
