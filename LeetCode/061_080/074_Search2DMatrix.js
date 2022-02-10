/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
  const m = matrix.length, n = matrix[0].length;
  if (matrix[0][0] > target || matrix[m-1][n-1] < target) return false;
  
  const findTarget = (arr, from, to) => {
      if (from >= to) return arr[from] == target;
      const m = Math.floor((from + to) / 2);
      if (arr[m] == target) return true;
      if (arr[m] < target) return findTarget(arr, m + 1, to);
      return findTarget(arr, from, m);
  }
  
  const findRow = (from, to) => {
      if (from >= to) return from;
      const m = Math.floor((from + to) / 2);
      if (matrix[m][0] == target) return m;
      if (matrix[m][0] < target) return findRow(m + 1, to);
      return findRow(from, m);
  }
  
  if (m == 1) return findTarget(matrix[0], 0, n-1);
  
  const row = findRow(0, m-1);
  if (matrix[row][0] <= target) return findTarget(matrix[row], 0, n-1);
  
  return findTarget(matrix[row-1], 0, n-1);
}
