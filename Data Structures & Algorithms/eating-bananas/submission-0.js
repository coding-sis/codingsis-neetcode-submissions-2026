class Solution {
        totalHours (rate, piles) { 
        let hours = 0; 
        for (let i = 0; i < piles.length; i++) { 
            hours += Math.ceil(piles[i] / rate); 
        } 

        return hours; 
    }

    minEatingSpeed(piles, h) {
        let minK = 1;
        let maxK = Number.NEGATIVE_INFINITY;
        for (let i = 0; i < piles.length; i++) {
            maxK = Math.max(maxK, piles[i]);
        }

        // Now, we have a range of k [1, maxK] that we can examine values using binary search.
        // That is, run the binary search in the k's range.
        while(minK <= maxK) {
            const midK = Math.floor((maxK + minK) / 2);
            const totalHoursToEat = this.totalHours(midK, piles);
            
            if (totalHoursToEat <= h) {
                maxK = midK-1;
            } else {
                minK = midK+1;
            }
        }

        return minK;
    }
}
