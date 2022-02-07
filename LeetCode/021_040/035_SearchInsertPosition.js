/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  const len = nums.length;
  if (nums[0] >= target) return 0;
  if (nums[len-1] < target) return len;
  return findTarget(nums, 0, len-1, target);
}

function findTarget(nums, from, to, T) {
  if (from >= to) return from;
  const m = Math.floor((from + to) / 2);
  if (nums[m] == T) return m;
  if (nums[m] > T) return findTarget(nums, from, m, T);
  return findTarget(nums, m + 1, to, T);
}