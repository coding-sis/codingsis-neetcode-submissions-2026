class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const record = [];
        for (let o of operations) {
            if(o === '+') {
                // add the latest two numbers
                const top = record.pop();
                const newTop = top + record[record.length-1];
                record.push(top);
                record.push(newTop);
            } else if(o === 'D') {
                record.push(record[record.length - 1] * 2);
            } else if(o === 'C') {
                record.pop();
            } else {
                record.push(Number(o));
            }
        }

        return record.reduce((a, b) => a + b, 0);
    }
}