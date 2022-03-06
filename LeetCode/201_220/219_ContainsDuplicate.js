/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
  const dict = {};
  for (let i = 0; i < nums.length; i++) {
      if (dict.hasOwnProperty(nums[i])) {
          if (i - dict[nums[i]] <= k) return true;
      }
      dict[nums[i]] = i;
  }
  return false;
};