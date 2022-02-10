/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
          if (matrix[r][c] == 0) matrix[r][c] = '.';
      }
  }
  for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
          if (matrix[r][c] == '.') {
              matrix[r][c] = 0;
              for (let i = 0; i < n; i++)
                  if (matrix[r][i] != '.') matrix[r][i] = 0;
              for (let i = 0; i < m; i++) 
                  if (matrix[i][c] != '.') matrix[i][c] = 0;
          }
      }
  }
  return matrix;
};