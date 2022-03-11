/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  const m = matrix.length, n = matrix[0].length;
  if (m * n === 1) return +matrix[0][0];
  
  for (let r = 1; r < m; r++) {
      for (let c = 0; c < n; c++) {
          if (+matrix[r][c] > 0) matrix[r][c] = +matrix[r][c] + +matrix[r-1][c];
      }
  }
  
  let maxA = 0;
  for (let r = 0; r < m; r++) {
      maxA = Math.max(maxA, getMaxSquare(matrix[r], n));
  }
  return maxA;
};

function getMaxSquare(arr, len) {
  let maxA = 0;
  for (let i = 0; i < len; i++) {
      if (arr[i] < 1 || (i > 0 && arr[i] === arr[i-1])) continue;
      if (arr[i] == 1) maxA = Math.max(maxA, 1);
      let l = i, r = i;
      while (l >= 0 && arr[l] >= arr[i]) l--;
      while (r < len && arr[r] >= arr[i]) r++;
      if (r - l - 1 >= arr[i]) maxA = Math.max(maxA, arr[i] * arr[i]);
  }
  return maxA;
}