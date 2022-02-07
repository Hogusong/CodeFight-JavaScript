/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
  const lS = s.length;
  const lP = p.length;
  const isMatchRec = (i, j) => {
      if (i == lS) {
          if (j == lP) return true;
          return p.substring(j) == '*'.repeat(lP - j);
      }
      if (j == lP) return false;
      if (s[i] == p[j] || p[j] == '?') return isMatchRec(i+1, j+1);
      if (p[j] == '*') return isMatchRec(i+1, j) || isMatchRec(i+1, j+1) || isMatchRec(i, j+1);
      return false;
  }
  
  return isMatchRec(0, 0)
};

// Using a Dictionary.
var isMatch2 = function(s, p) {
  if (s.length < 1) return p.length < 1 || p === '*';
  const m = s.length,  n = p.length;
  const dp = [];
  for (let i = 0; i <= m; i++) {
    const row = [];
    for (let j = 0; j <=n; j++) {
      row[j] = false;
    }
    dp.push(row);
  }
    
  dp[0][0] = true;
  for (let j=1; j<=p.length; j++) {
    if (p[j-1] === '*') dp[0][j] = dp[0][j-1];
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i-1] === p[j-1] || p[j-1] === '?') dp[i][j] = dp[i-1][j-1];
      else if (p[j-1] === '*') dp[i][j] = dp[i-1][j] || dp[i][j-1];
      else dp[i][j] = false
    }
  }
  return dp[m][n];
}