class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const map = new Map();
        for (let i = 0; i < S.length; i++){
            const c = S[i];
            if(!map.has(c)) {
                map.set(c, [i, i]);
            } else {
                const tmp = map.get(c);
                tmp[1] = i;
                map.set(c, tmp);
            }
        }

        const letterRanges = [...map.values()].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
        const res = [];
        let [s, e] = letterRanges[0];
        for(let i = 1; i < letterRanges.length; i++) {
            const [tmpS, tmpE] = letterRanges[i];
            if (e < tmpS) {
                res.push(e - s + 1);
                [s, e] = letterRanges[i];
            } 
            e = Math.max(tmpE, e);
        }
        res.push(e - s + 1);
        return res;
    }
}
