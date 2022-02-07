/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  let maxA = 0;
  let left = 0, right = height.length-1;
  while (left < right) {
      const area = (right - left) * Math.min(height[left], height[right]);
      if (maxA < area) maxA = area;
      if (height[left] < height[right]) left++;
      else right--;
  }
  return maxA;
};