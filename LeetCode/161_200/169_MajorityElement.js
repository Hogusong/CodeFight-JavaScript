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

var majorityElement = function(nums) {
  let majNum, count = 0;
  for (let n of nums) {
      if (count == 0) majNum = n;
      count += majNum == n ? 1 : -1;
  }
  return majNum;
};