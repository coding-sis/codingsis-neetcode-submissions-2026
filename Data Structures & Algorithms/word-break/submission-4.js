class Solution {
    wordBreak(s, wordDict) {
        const memo = new Array(s.length + 1).fill(false);
        memo[memo.length - 1] = true; // base case

        // traverse from the end
        for(let i = s.length - 1; i >= 0; i--) {

            for (const w of wordDict) {
                if (s.substring(i).startsWith(w)) {
                    // can segment up to the i-th pos from the end
                    memo[i] = memo[i + w.length];
                }

                if (memo[i]) break;
            }
        }

        return memo[0];
    }

    startCheck(s, i, w) {
        for (let j = 0; j < w.length; j++) {
            if (s[i++] !== w[j]) return false;
        }
        return true;
    }
}
