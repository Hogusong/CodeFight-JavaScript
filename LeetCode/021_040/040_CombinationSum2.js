/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
  candidates = candidates.sort((a,b) => a - b);
  const result = [];
  const set = new Set();
  const helper = (i, T, ans = "") => {
      if (T == 0) {
          if (!set.has(ans)) {
              result.push(ans.substring(1).split(','));
              set.add(ans);
          }
          return;
      }
      if (i >= candidates.length || candidates[i] > T) return;

      helper(i + 1, T, ans);
      ans += ',' + candidates[i]
      helper(i + 1, T - candidates[i], ans);
  }
  
  helper(0, target);
  return result;
}
