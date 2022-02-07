/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  if (nums.length < 1) return 0;
  let index = null;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] == val) {
          if (index == null) index = i;
      } else {
          if (index != null) {
              nums[index++] = nums[i];
          }
      }
  }
  return index != null ? index : nums.length;
}
