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
    decodeOld(str, decoded = []) {
        if(!str || !str.length) return decoded;

        const keyEnd = str.indexOf('#');
        const numChars = str.substring(0, keyEnd);
        
        const token = str.substring(keyEnd+1, parseInt(numChars) + numChars.length+1);
        decoded.push(token);

        str = str.substring(keyEnd + parseInt(numChars) + 1);

        this.decodeOld(str, decoded)
        return decoded;
    }

    decode(str) {
        const decoded = [];
        let sizeChars = '';
        for(let i = 0; i < str.length; i++) {
            const c = str[i];

            if (c === '#') {
                // as soon as # is detected, get the size of the next token to decode
                const size = parseInt(sizeChars);

                // collect the following chars with the size 
                let token = '';
                let stop = i+size;
                for (i = i+1; i <= stop; i++) {
                    token += str[i];
                }
                decoded.push(token);
                
                sizeChars = ''; // reset the sizeChars and find a following token
                i--; // adjust the index value to point for the next iteration.
            } else {
                sizeChars += c;
            }
        }
        return decoded;
    }
}