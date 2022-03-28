/**
 * @param {number[][]} matrix
 * @return {number}
 */
// Time Limit Exceeded. 135/138 test cases passed.
var longestIncreasingPath = function(matrix) {
  const m = matrix.length, n = matrix[0].length;
  if (m * n == 1) return 1;
  let maxL = 0;
  
  const dfs = (r, c, len, prev) => {
      if (r < 0 || c < 0 || r >= m || c >= n || matrix[r][c] <= prev) {
          maxL = Math.max(maxL, len);
          return;
      }
      dfs(r-1, c, len+1, matrix[r][c])
      dfs(r+1, c, len+1, matrix[r][c])
      dfs(r, c-1, len+1, matrix[r][c])
      dfs(r, c+1, len+1, matrix[r][c])
  }

  for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
          dfs(r, c, 0, -1);
      }
  }
  return maxL;
};

// Dynamic Program: Passed.
var longestIncreasingPath = function(matrix) {
  const m = matrix.length, n = matrix[0].length;
  if (m * n == 1) return 1;
  let maxL = 0, dict = {};
  
  const dfs = (r, c, prev) => {
      if (r < 0 || c < 0 || r >= m || c >= n || matrix[r][c] <= prev) {
          return 0;
      }
      if (dict[r + ',' + c]) return dict[r + ',' + c];
      const up = 1 + dfs(r-1, c, matrix[r][c])
      const down = 1 + dfs(r+1, c, matrix[r][c])
      const left = 1 + dfs(r, c-1, matrix[r][c])
      const right = 1 + dfs(r, c+1, matrix[r][c])
      dict[r + ',' + c] = Math.max(up, down, left, right);
      return dict[r + ',' + c];
  }
  
  for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
          maxL = Math.max(maxL, dfs(r, c, -1));
      }
  }
  return maxL;
};