/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let sum = nums[0], minL = nums.length + 1, l = 0, r = 1;
  while (l <= r) {
      if (sum >= target) {
          minL = Math.min(minL, r - l);
          sum -= nums[l++];
      } else {
          if (r >= nums.length) break;
          sum += nums[r++];
      }
  }
  return minL <= nums.length ? minL : 0;
};