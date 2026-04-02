/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {

    // n is a positive int.
    guessNumber(n) {
        let [low, high] = [1, n];
        while(low <= high) {
            const mid = Math.floor((low + high)/ 2);
            const res = guess(mid);
            if (res === 0) return mid;
            
            if(res < 0) {
                high = mid-1;
            } else {
                low = mid + 1;
            }
        }
    }
}
