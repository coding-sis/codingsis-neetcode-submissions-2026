class Solution {
    isPalindrome(word, i, j) {
        while (i < j) {
            if (word[i++] !== word[j--]) return false;
        }
        return true;
    }

    partition(word, start = 0, parts = [], res = []) {
        if(start === word.length) {
            res.push([...parts]);
            return res;
        }

        for(let end = start; end < word.length; end++) {
            if(!this.isPalindrome(word, start, end)) continue;

            parts.push(word.substring(start, end+1));
            this.partition(word, end+1, parts, res);
            parts.pop();
        }
        return res;

    }
}
