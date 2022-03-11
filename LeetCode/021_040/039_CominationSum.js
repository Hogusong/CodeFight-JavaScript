/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
  const result = [];
  candidates = candidates.sort((a,b) => a - b);
  const helper = (i, T, ans) => {
      if (T == 0) {
          result.push(ans);
          return;
      }
      if (i >= candidates.length || candidates[i] > T) return;
      helper(i, T - candidates[i], [...ans, candidates[i]])
      helper(i + 1, T, ans)
  }
  
  helper(0, target, []);
  return result;
}
