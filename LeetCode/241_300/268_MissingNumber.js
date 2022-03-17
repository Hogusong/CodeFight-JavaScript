/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let res = nums.length;
  for (let i = 0; i < nums.length; i++) {
      res += i - nums[i];
  }
  return res;
};

var missingNumber = function(nums) {
  let n = nums.length;
  n = (n + 1) * n / 2;
  for (let i = 0; i < nums.length; i++) {
      n -= nums[i];
  }
  return n;
};