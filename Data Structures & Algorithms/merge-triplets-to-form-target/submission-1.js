class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        const check = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
        for (let triplet of triplets) {
            if(target[0] >= triplet[0] && target[1] >= triplet[1] && target[2] >= triplet[2]) {
            check[0] = Math.max(check[0], triplet[0]);
            check[1] = Math.max(check[1], triplet[1]);
            check[2] = Math.max(check[2], triplet[2]);

            if(check[0] === target[0] && check[1] === target[1] && check[2] === target[2]) {
                return true;
            }
            }

        }
        return false;
    }
}
