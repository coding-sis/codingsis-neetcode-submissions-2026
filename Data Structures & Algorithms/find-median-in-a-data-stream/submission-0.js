
class MedianFinder {
        
    constructor() {
        this.queue = new MinPriorityQueue();
    }

    /**
     * adds the integer num from the data stream to the data structure.
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.queue.enqueue(num);
    }

    /**
     * The median is the middle value in a sorted list of integers. 
     * For lists of even length, there is no middle value, 
     * so the median is the mean of the two middle values.
     * 
     * @return {number} returns the median of all elements so far.
     */
    findMedian() {
        let size = this.queue.size();
        let mid = Math.floor(size / 2);

        let dequeued = [];
        let [find1, find2] = [null, null];
        while (mid >= 0) {
            let find1 = this.queue.dequeue();
            dequeued.push(find1);
            mid--;
        }

        let median = dequeued.pop();
        this.queue.enqueue(median);

        if (size % 2 === 0 && dequeued.length) {
            let tmp = dequeued.pop();
            median = (median + tmp)/2;
            this.queue.enqueue(tmp);
        }

        dequeued.forEach(e => this.queue.enqueue(e));
        
        return median;
    }
}
