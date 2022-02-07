/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
  if (nums.length < 1) return [-1, -1];
  const index = findTarget(nums, 0, nums.length - 1, target);
  if (index < 0) return [-1, -1];
  let l = index, r = index;
  while (l >= 0 && nums[l] == target) l--; 
  while (r < nums.length && nums[r] == target) r++;
  return [l+1, r-1];
}

function findTarget(nums, from, to, T) {
  if (from >= to) return nums[from] == T ? from : -1;
  const m = Math.floor((from + to) / 2);
  if (nums[m] == T) return m;
  if (nums[m] > T) return findTarget(nums, from, m, T);
  return findTarget(nums, m + 1, to, T);
}