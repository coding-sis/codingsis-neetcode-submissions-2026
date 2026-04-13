class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    distanceToOrigin(point) {
        // the exact distance has to be obtained via square root.
        // however the caller is just comparing distances among points, 
        // so just simplified this function.
        return Math.pow(point[0], 2) + Math.pow(point[1], 2);
    }

    kClosest1(points, k) {
        // build a priority queue of given points for the distance as a priority
        const queue = new PriorityQueue((p1, p2) => this.distanceToOrigin(p1) - this.distanceToOrigin(p2), points);
        
        // pop the first k elements in the queue
        const answer = [];
        const queueSize = queue.size();
        for (let i = 0; i < k && i < queueSize; i++) {
            answer.push(queue.dequeue());
        }
        return answer;
    }

    kClosest(points, k) {
        const queue = new MaxPriorityQueue(p => this.distanceToOrigin(p));
        for (let i = 0; i < points.length; i++) {
            queue.enqueue(points[i]);
            if(queue.size() > k) queue.dequeue();
        }

        const answer = [];
        while(queue.size()) {
            answer.push(queue.dequeue());
        }
        return answer;
    }
}
