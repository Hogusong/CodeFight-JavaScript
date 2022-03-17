/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// Time Limit Exceeded.  172/175 test cases passed.
var combinationSum2 = function(candidates, target) {
    candidates = candidates.sort((a,b) => a - b);
    const result = [];
    const set = new Set();
    const helper = (i, T, ans = []) => {
        if (T == 0) {
            const key = ans.join(',');
            if (!set.has(key)) {
                result.push(ans);
                set.add(key);
            }
            return;
        }
        if (i >= candidates.length || candidates[i] > T) return;
  
        helper(i + 1, T, ans);
        helper(i + 1, T - candidates[i], [...ans, candidates[i]]);
    }
    
    for (let i = 0; i < candidates.length; i++) {
        if (i > 0 && candidates[i] == candidates[i-1]) continue;
        if (candidates[i] > target) break;
        helper(i, target)
    }
    return result;
  }