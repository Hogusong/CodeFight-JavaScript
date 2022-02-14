/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
// Time Limit Exceeded: 51/64 test cases passed.
var numDistinct = function(s, t) {
  const sL = s.length, tL = t.length;
  if (sL < tL) return 0;
  let count = 0;
  
  const findT = (i, j) => {
      if (sL - i < tL - j) return;
      if (i == sL && j == tL) {
          count++;
          return;
      }
      if (s[i] == t[j]) findT(i+1, j+1);
      findT(i+1, j)
  }
  
  findT(0, 0);
  return count;
};

// Time Limit Exceeded: 51/64 test cases passed. (simple code than above)
var numDistinct = function(s, t) {
  const sL = s.length, tL = t.length;
  if (sL < tL) return 0;
  
  const findT = (i, j) => {
      if (sL - i < tL - j) return 0;
      if (i == sL && j == tL) return 1;
      if (s[i] != t[j]) return findT(i+1, j);
      return findT(i+1, j+1) + findT(i+1, j)
  }
  
  return findT(0, 0);
};

// Using Dictionary for Dynamin Programming.
var numDistinct = function(s, t) {
  const sL = s.length, tL = t.length;
  if (sL < tL) return 0;
  let count = 0, dict = {};
  
  const findT = (i, j) => {
      if (sL - i < tL - j) return 0;
      if (i == sL && j == tL) return 1;
      const key = i + ',' + j;
      if (dict.hasOwnProperty(key)) return dict[key];
      dict[key] = findT(i+1, j)
      if (s[i] == t[j]) dict[key] += findT(i+1, j+1);
      return dict[key];
  }
  
  return findT(0, 0);
};

// Using 2D Array
var numDistinct = function(s, t) {
  const m = s.length, n = t.length;
  if (m < n) return 0;
  const dp = []
  for (let i = 0; i <= m; i++) dp[i] = [];

  for (let i  = 0; i <= m; i++) {
      for (let j = 0; j <= n; j++) {
          if (j == 0) dp[i][j] = 1;
          else if (i == 0) dp[i][j] = 0;
          else if (t[j-1] != s[i-1]) dp[i][j] = dp[i-1][j];
          else dp[i][j] = dp[i-1][j] + dp[i - 1][j - 1];
      }
  }
  return dp[m][n];
};