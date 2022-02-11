/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  if (matrix.length < 1 || matrix[0].length < 1) return 0;
  let max_area = 0, previousRow = null;
  for (let i = 0; i < matrix.length; i++) {
    const row = createRow(previousRow, matrix[i])
    previousRow = row;
    const area = findMaxAreaInRow(row);
    max_area = Math.max(max_area, area);
  }
  return max_area;
}

function createRow(Pre, Curr) {
  if (!Pre) return Curr.map( a => +a);

  const H = [];
  for (let i = 0; i < Curr.length; i++) {
    H[i] = (Curr[i] === '0') ? 0 : +Pre[i] + +Curr[i]; 
  }
  return H
}

function findMaxAreaInRow(H) {
  if (H.length === 1) return +H[0];

  let stack = [], index = 0, max_area = 0;
  while (index < H.length) {
    if (stack.length < 1 || H[stack[stack.length-1]] <= H[index]) {
      stack.push(index++); 
    } else max_area = findMaxArea(H, stack, index, max_area)
  }
  while (stack.length > 0) {
    max_area = findMaxArea(H, stack, index, max_area);
  }
  return max_area;
}

function findMaxArea(H, stack, index, max_area) {
  const top = stack.pop();
  let area = 0
  if (stack.length < 1) area = H[top] * index;
  else  area = H[top] * (index - stack[stack.length-1] - 1);
  
  return Math.max(max_area, area);
}

// Using Sliding Window.
var maximalRectangle2 = function(matrix) {
  const m = matrix.length, n = matrix[0].length;

  for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
          if (r == 0) matrix[r][c] = +matrix[r][c];
          else if (matrix[r][c] == '0') matrix[r][c] = 0;
          else matrix[r][c] = +matrix[r][c] + +matrix[r-1][c];
      }
  }
  let maxA = 0;
  for (let r = 0; r < m; r++) {
      maxA = Math.max(maxA, findMaxArea(matrix[r]))
  }
  return maxA;
}

function findMaxArea(H) {
  let maxA = H[0]; minH = H[0];
  const len = H.length;
  for (let i = 0; i < len; i++) {
      if (i > 0 && H[i] == H[i-1]) continue;
      if (H[i] <= minH) {
          minH = H[i];
          if (maxA >= minH * len) continue;
      }
      let left = i, right = i;
      while (left >= 0 && H[left] >= H[i]) left--;
      while (right < len && H[right] >= H[i]) right++;
      maxA = Math.max(maxA, H[i] * (right - left - 1));
  }
  return Math.max(maxA, minH * len);
}