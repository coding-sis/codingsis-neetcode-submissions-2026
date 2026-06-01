class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const finalRes = [];
        while(strs.length > 0) {
            // analyze the first str prior to finding its anagrams.
            const str = strs[0];
            const group = [str];
            const map = new Map();
            for(let c of str) {
                if(!map.has(c)) map.set(c, 0);
                map.set(c, map.get(c)+1);
            }
            strs.splice(0, 1);
            
            // check other strings in the input array
            for (let i = 0; i < strs.length; i++) {
                if (strs[i].length !== str.length) continue;

                const map2 = new Map(map);
                for(let c of strs[i]) {
                    if (!map2.has(c)) break;
                    else if(map2.get(c) === 1) map2.delete(c);
                    else map2.set(c, map2.get(c) - 1);
                }
                
                if(map2.size === 0) {
                    // add the strs[i] to the group, and remove it from the array
                    group.push(strs[i]);
                    strs.splice(i, 1);
                    i -= 1;
                    
                }
            }

            finalRes.push(group);
        }

        return finalRes;
    }
}