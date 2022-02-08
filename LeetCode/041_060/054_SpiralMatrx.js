/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
  const rows = matrix.length;
  if (rows < 1) return [];
  const cols = matrix[0].length;
  const ans = [];
  let top = 0, bottom = rows - 1;
  let left = 0, right = cols - 1;
  while (ans.length < rows * cols) {
    for (let c = left; c <= right; c++) {
      ans.push(matrix[top][c]);
    }
    if (ans.length >= rows * cols) break;
    top++;

    for (let r = top; r <= bottom; r++) {
      ans.push(matrix[r][right]);
    }
    if (ans.length >= rows * cols) break;
    right--;

    for (let c = right; c >= left; c--) {
      ans.push(matrix[bottom][c]);
    }
    if (ans.length >= rows * cols) break;
    bottom--;

    for (let r = bottom; r >= top; r--) {
      ans.push(matrix[r][left]);
    }
    left++;
  }
  return ans;
}

// Using boolean to redirct right, down, left, and up.
var spiralOrder = function(matrix) {
  const rows = matrix.length;
  if (rows < 1) return [];
  const cols = matrix[0].length;
  const ans = [];
  let top = 1, bottom = rows - 1, r = 0;
  let left = 0, right = cols - 1, c = 0;
  let toRight = true, toDown = false, toLeft = false;
  while (ans.length < rows * cols) {
      ans.push(matrix[r][c])
      if (toRight) {
          if (c < right) c++;
          else {
              r++;
              toRight = false;
              toDown = true;
              right--;
          }
      } else if (toDown) {
          if (r < bottom) r++;
          else {
              c--;
              toDown = false;
              toLeft = true;
              bottom--;
          }
      } else if (toLeft) {
          if (c > left) c--;
          else {
              r--;
              toLeft = false;
              left++;
          }
      } else {
          if (r > top) r--;
          else {
              c++;
              toRight = true;
              top++;
          }
      }
  }
  return ans;
}
