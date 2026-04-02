class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {const stack = [];
        const open = '({[';
        for(let b of s) {
            if(open.includes(b)) {
                stack.push(b);
            } else {
                const pop = stack.pop(); 
                
                if( b === ')' && pop != '(' || 
                b === ']' && pop != '[' || 
                b === '}' && pop !== '{' ) return false;
            }
        }
        
        return !stack.length;}
}
