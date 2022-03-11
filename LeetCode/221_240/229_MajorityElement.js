/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  const key = nums.length / 3;
  const dict = {}, set = new Set();
  for (let x of nums) {
      if (!dict[x]) dict[x] = 1;
      else dict[x]++;
      if (dict[x] > key) set.add(x);
  }
  return Array.from(set);
};