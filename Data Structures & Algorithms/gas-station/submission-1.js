class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        // 1. First make sure if given gas total >= cost total
        //    That is, if gas total < cost total, then return -1
        const totalGas = gas.reduce((a, b) => a + b, 0);
        const totalCost = cost.reduce((a, b) => a + b, 0);
        if(totalGas < totalCost) return -1;

        // Note that, at this point, there must be a station meeting the problem requirement.
        // 2. start looping from the first station
        //  - while looping if the curr loc != the start pos but gasInTank < 0, 
        //    reset the gasInTank to the gas[loc] and keep looping
        let starting = 0;
        let gasInTank = 0;
        for(let i = 0; i < gas.length; i++) {
            gasInTank += (gas[i] - cost[i]);

            if (gasInTank < 0) {
                gasInTank = 0;
                starting = i + 1; // start looping from the next location in the loop
            }
        }

        return starting;
    }
}
