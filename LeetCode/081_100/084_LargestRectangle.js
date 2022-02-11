/**
 * @param {number[]} heights
 * @return {number}
 */
// Time efficient than the next solution.
var largestRectangleArea = function(heights) {
  const len = heights.length;
  if (len == 1) return heights[0];
  let stack = [], index = 0, maxA = 0;
  
  const findMaxArea = (index, maxA) => {
      const top = stack.pop();
      let area = 0
      if (stack.length < 1) area = heights[top] * index;
      else  area = heights[top] * (index - stack[stack.length-1] - 1);

      return Math.max(maxA, area);
  }
  
  while (index < len) {
      if (stack.length < 1 || heights[stack[stack.length-1]] <= heights[index]) {
          stack.push(index++); 
      } else maxA = findMaxArea(index, maxA)
  }
  while (stack.length > 0) {
      maxA = findMaxArea(index, maxA);
  }
  return maxA;
}

// More simple than above solution.
var largestRectangleArea = function(heights) {
  const len = heights.length;
  if (len == 1) return heights[0];
  let maxA = 0, maxH = 0, minH = heights[0];
  for (let i = 0; i < len; i++) {
    // Time Limit Exceeded without next line: 93/98 test cases passed.
    if (i > 0 && heights[i-1] == heights[i]) continue;  // skip for the adjacent same height.
    if (heights[i] < minH) {
      minH = heights[i];
      if (maxA >= minH * len) continue;
    }
    let left = i, right = i
    while (left >= 0 && heights[left] >= heights[i]) left--;
    while (right < len && heights[right] >= heights[i]) right++;
    maxA = Math.max(maxA, heights[i] * (right - left - 1));
    maxH = Math.max(maxH, heights[i]);
  }
  return Math.max(maxA, maxH);
}