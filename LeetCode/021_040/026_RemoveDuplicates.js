/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  if (nums.length < 2) return nums.length;
  let index = 0; 
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] == nums[i-1]) {
          if (index == 0) index = i;
      } else if (index > 0) {
          nums[index++] = nums[i];
      }
  }
  return index ? index : nums.length;
};