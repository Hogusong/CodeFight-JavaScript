/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
  const matrix = [];
  for (let r = 0; r < m; r++) matrix[r] = [];
  
  for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
          if (r == 0 || c == 0) matrix[r][c] = 1;
          else matrix[r][c] = matrix[r-1][c] + matrix[r][c-1];
      }
  }
  return matrix[m-1][n-1];
}

// Using Recursion: Time Limit Exceeded.
var uniquePaths2 = function(m, n) {
  const matrix = []
  for (let i = 0; i < m; i++) matrix.push([]);
  count = 0;

  const findPaths = (r, c) => {
      if (r >= m - 1 && c >= n - 1) count++;
      else {
          if (r < m - 1) findPaths(r+1, c);
          if (c < n - 1) findPaths(r, c+1);
      }
  }

  findPaths(0, 0);
  return count;
}
