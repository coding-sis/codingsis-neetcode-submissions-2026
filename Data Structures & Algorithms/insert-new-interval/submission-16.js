// https://neetcode.io/problems/insert-new-interval/question?list=blind75
class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        if (!intervals.length) return [[newInterval]];
        let newIntervals = [];
        let [newS, newE] = [undefined, undefined]
        let foundOverlap = false;
        let inserted = false;
        for(let i = 0; i < intervals.length; i++) {
            let interval = intervals[i];

            let overlap = this.isOverlapped(newInterval, interval);
            while (overlap) {
                foundOverlap = true;
                let [s, e] = interval;
                if(!newS) newS = Math.min(newInterval[0], s);
                newE = Math.max(newInterval[1], e);
                
                interval = intervals[++i]
                if(!interval) break;
                overlap = this.isOverlapped(newInterval, interval);
            }

            if(!foundOverlap && interval) {
                if(!inserted && interval[0] > newInterval[1]) {
                    newIntervals.push(newInterval);
                    inserted = true;
                }
                newIntervals.push(interval);
            } else {
                foundOverlap = false;
                newIntervals.push([newS, newE]);
                interval && newIntervals.push(interval);
                inserted = true;
            }
        }
        
        if(!inserted) newIntervals.push(newInterval);
        
        return newIntervals;
    }

    isOverlapped(interval1, interval2) {
        const [s1, e1] = interval1;
        const [s2, e2] = interval2;

        return !(e1 < s2 || e2 < s1) // not (not overlap)
    }
}
