/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let index = null;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] == 0) {
          if (index == null) index = i;
      } else {
          if (index != null) nums[index++] = nums[i];
      }
  }
  if (index != null) {
      while (index < nums.length) nums[index++] = 0;
  }
};