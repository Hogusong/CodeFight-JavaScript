/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length < 2) return nums.length;
  nums = nums.sort((a,b) => a- b);
  let maxL = 1, start = null;
  for (let i = 1; i < nums.length; i++) {
      if (start == null) {
          if (nums[i-1] + 1 == nums[i]) start = i - 1;
      } else {
          if (nums[i-1] == nums[i]) start++;
          if (nums[i-1] + 1 < nums[i]) {
              maxL = Math.max(maxL, i - start);
              start = null
          }
      }
  }
  if (start != null) maxL = Math.max(maxL, nums.length - start);
  return maxL;
};

var longestConsecutive = function(nums) {
  if (nums.length < 2) return nums.length;
  nums = nums.sort((a,b) => a - b);
  let maxL = 1, count = 1;
  for (let i = 1; i < nums.length; i++) {
      if (nums[i-1] == nums[i]) continue;
      if (nums[i-1] + 1 == nums[i]) count++;
      else {
          maxL = Math.max(maxL, count);
          count = 1
      }
  }
  return Math.max(maxL, count);
};