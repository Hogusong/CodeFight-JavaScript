/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
// Time Limit Exceeded. 62/67 test cases passed.
var countRangeSum = function(nums, lower, upper) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
      let sum = 0;
      for (let j = i; j < nums.length; j++) {
          sum += nums[j];
          if (sum >= lower && sum <= upper) count++;
      }
  }
  return count;
};