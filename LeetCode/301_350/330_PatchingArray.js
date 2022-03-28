/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
  let [i, output, upto, len] = [0, 0, 0, nums.length];
  while (upto < n) {
      if (i < len && nums[i] <= upto + 1) {
          upto += nums[i];
          i++;
      } else {
          output++;
          upto += upto + 1;
      }
  }
  return output;
};