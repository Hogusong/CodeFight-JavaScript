/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
  const m = matrix.length;
  for (let i = 0; i < m / 2; i++) {
      const temp = matrix[i];
      matrix[i] = matrix[m - i - 1];
      matrix[m - i - 1] = temp;
  }
  printMatrix(matrix);
  for (let r = 0; r < m; r++) {
      for (let c = r + 1; c < m; c++) {
          const t = matrix[r][c];
          matrix[r][c] = matrix[c][r];
          matrix[c][r] = t;
      }
  }
}

function printMatrix(M) {
  for (let i = 0; i < M.length; i++) console.log(M[i]);
}