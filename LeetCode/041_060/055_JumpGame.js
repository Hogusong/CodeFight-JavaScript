/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
  if (nums.length < 2) return true;
  let maxJ = 0;
  for (let i = 0; i < nums.length; i++) {
      maxJ = Math.max(nums[i], maxJ - 1);
      if (maxJ == 0) return false;
      if (maxJ + i >= nums.length - 1) return true;
  }
}