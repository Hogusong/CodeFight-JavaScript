/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
  const m = matrix.length, n = matrix[0].length;
  
  const searchCol = (arr, s, e) => {
      if (s >= e) return arr[s] == target;
      const mid = Math.floor((s + e) / 2);
      if (arr[mid] == target) return true;
      if (arr[mid] > target) return searchCol(arr, s, mid);
      return searchCol(arr, mid+1, e);
  }
  
  const searchRow = (c, s, e) => {
      if (s >= e) return matrix[s][c] == target;
      const mid = Math.floor((s + e) / 2);
      if (matrix[mid][c] == target) return true;
      if (matrix[mid][c] > target) return searchRow(c, s, mid);
      return searchRow(c, mid+1, e);        
  }
  
  if (m < n) {
      for (let r = 0; r < m; r++) {
          if (matrix[r][0] <= target && target <= matrix[r][n-1]) {
              if (searchCol(matrix[r], 0, n-1)) return true;
          }
      }
  } else {
      for (let c = 0; c < n; c++) {
          if (matrix[0][c] <= target && target <= matrix[m-1][c]) {
              if (searchRow(c, 0, m-1)) return true;
          }
      }
  }
  
  return false;
};