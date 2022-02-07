/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
  let lSum = 0, rSum = 0, hSum = 0, maxH = 0;
  let lH = 0, rH = 0;
  const len = height.length;
  for (let i = 0; i < len; i++) {
      maxH = Math.max(maxH, height[i]);
      hSum += height[i];
      if (height[i] < lH) lSum += lH - height[i];
      else lH = height[i];
      if (height[len - i - 1] < rH) rSum += rH - height[len - i - 1];
      else rH = height[len - i - 1];
  }
  
  return lSum + rSum + hSum - (maxH * len);
}
