class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        const stations = gas.length;
        for (let start = 0; start < stations; start++) {
            let gasInTank = gas[start];

            // travel the circle from the start station.
            for (let j = 1; j <= stations; j++) {
                let nextStation = start + j;
                if (nextStation >= stations) nextStation -= stations;

                let currStation = nextStation === 0? stations - 1: nextStation - 1;
                gasInTank -= cost[currStation];
                // can't make to the next Station, so give up.
                if(gasInTank < 0) break;

                gasInTank += gas[nextStation]
                if (start === nextStation) return start;
            }
        }

        return -1;
    }
}
