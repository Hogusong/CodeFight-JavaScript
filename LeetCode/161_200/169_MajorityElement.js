/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const n = nums.length;
  if (n < 3) return nums[0];
  const dict = {};
  for (let x of nums) {
      if (!dict[x]) dict[x] = 1;
      else {
          dict[x]++;
          if (dict[x] > n / 2) return x;
      }
  }
};

var majorityElement = function(nums) {
  const n = nums.length;
  if (n < 3) return nums[0];
  nums = nums.sort((a, b) => a - b);
  return nums[Math.floor(n / 2)];
};