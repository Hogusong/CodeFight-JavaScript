/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
 var containsNearbyAlmostDuplicate = function(nums, k, t) {
  if (k < 1) return false;
  for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j <= i + k && j < nums.length; j++) {
          if (Math.abs(nums[j] - nums[i]) <= t) return true;
      }
  }
  return false;
};