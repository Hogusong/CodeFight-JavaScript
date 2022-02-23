/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Focus on the max jumps from the current index.
var canJump = function(nums) {
  if (nums.length < 2) return true;
  let maxJ = 0;
  for (let i = 0; i < nums.length; i++) {
      maxJ = Math.max(nums[i], maxJ - 1);
      if (maxJ == 0) return false;
      if (maxJ + i >= nums.length - 1) return true;
  }
}

// Focus on the max index to reach possibly.
var canJump = function(nums) {
  if (nums.length < 2) return true;
  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
      maxIndex = Math.max(nums[i] + i, maxIndex);
      if (maxIndex >= nums.length - 1) return true;
      if (maxIndex == i) return false;
  }
}