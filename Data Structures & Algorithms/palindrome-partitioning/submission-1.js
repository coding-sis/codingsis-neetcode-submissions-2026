class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
        partition(s) {
        const res = [];
        this.backtracking(s, res);
        return res;
    }

    backtracking(s, res, start = 0, collect=[]) {
        if (start >= s.length) {
            res.push([...collect]);
            return;
        }

        for (let end = start; end < s.length; end++) {
            if (!this.isPalindrome(s, start, end)) continue;

            // collect a new palindrome just found
            collect.push(s.substring(start, end+1));

            // DFS-traverse the next partition group starting from the (end+1) char
            this.backtracking(s, res, end+1, collect);

            // backtrack
            collect.pop();
        }
    }

    isPalindrome(s, left=0, right=s.length-1) {
        if(left >= right) return true;
        if (s[left] !== s[right]) return false;

        return this.isPalindrome(s, left+1, right-1);
    }
}
