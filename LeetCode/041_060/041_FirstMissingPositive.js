/**
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositive = function(nums) {
  nums = nums.sort((a,b) => a - b);
  const index = findOne(nums, 0, nums.length-1);
  let expected = 1;
  for (let i = index; i < nums.length; i++) {
      if (i > index && nums[i] == nums[i-1]) continue;
      if (nums[i] != expected) return expected;
      expected++;
  }
  return expected;
}

function findOne(nums, from, to) {
  if (from >= to) return from;
  const m = Math.floor((from + to) / 2);
  if (nums[m] == 1) return m;
  if (nums[m] > 1) return findOne(nums, from, m);
  return findOne(nums, m+1, to);
}