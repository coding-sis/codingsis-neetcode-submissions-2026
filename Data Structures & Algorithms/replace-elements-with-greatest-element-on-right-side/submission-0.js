class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const res = new Array(arr.length).fill(-1);

        for (let i = arr.length - 2; i >= 0; i--){
            res[i] = Math.max(arr[i+1], res[i+1]);
        }   

        return res;
    }
}
