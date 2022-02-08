/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) matrix[i] = new Array(n);
  let x = 1, top = 0, bottom = n - 1, left = 0, right = n - 1;
  while (x <= n * n) {
      for (let c = left; c <= right; c++) matrix[top][c] = x++;
      top++;
      if (x > n * n) return matrix;
      
      for (let r = top; r <= bottom; r++) matrix[r][right] = x++;
      right--;
      if (x > n * n) return matrix;
      
      for (let c = right; c >= left; c--) matrix[bottom][c] = x++;
      bottom--;
      if (x > n * n) return matrix;
      
      for (let r = bottom; r >= top; r--) matrix[r][left] = x++;
      left++;
  }
  return matrix;
}

