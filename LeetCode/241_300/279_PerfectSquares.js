/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n) {
  let remains = new Set(), count = 0;
  remains.add(n);
  while (remains.size > 0) {
    const temp = Array.from(remains);
    remains = new Set();
    for (let r of temp) {
      if (r == 0) return count;
      for (let x = 1; x * x <= r; x++) remains.add(r - x * x)
    }
    count++;
  }
};

var numSquares = function(n) {
  const dp = Array(n+1).fill(n);
  dp[0] = 0;

  for (let target = 1; target <= n; target++) {
    for (let x = 1; x < target; x++) {
      const diff = target - x * x;
      if (diff < 0) break;
      dp[target] = Math.min(dp[target], 1  + dp[diff])
    }
  }
  return dp[n];
};