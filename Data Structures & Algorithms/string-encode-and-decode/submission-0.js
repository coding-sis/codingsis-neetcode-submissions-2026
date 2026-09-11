class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = [];
        for (let s of strs) {
            const len = s.length;
            encoded.push(len + '#'+ s);
        }
        return encoded.join('');
    }

    /**
     * @param {string} str e.g., 5#abc#d3#ef110#ghijklmnop
     * @returns {string[]} [abc#d, ef1, ghijklmnop]
     */
    decode(str, decoded = []) {
        if(!str || !str.length) return decoded;

        const keyEnd = str.indexOf('#');
        const numChars = str.substring(0, keyEnd);
        
        const token = str.substring(keyEnd+1, parseInt(numChars) + numChars.length+1);
        decoded.push(token);

        str = str.substring(keyEnd + parseInt(numChars) + 1);

        this.decode(str, decoded)
        return decoded;
    }
}