/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  if (nums.length == 1) return nums[0] == target ? 0 : -1;
  const len = nums.length;
  if (nums[0] < nums[len-1]) return findIndex(nums, 0, len - 1, target);
  const pivoit = findPivoit(nums, 0, len - 1);
  if (nums[0] <= target) return findIndex(nums, 0, pivoit, target);
  return findIndex(nums, pivoit + 1, len - 1, target);
}

function findPivoit (nums, from, to) {
  if (from >= to) return from;
  const m = Math.floor((from + to) / 2);
  if ((m == 0 || nums[m-1] < nums[m]) && nums[m] > nums[m+1]) return m;
  if (nums[0] < nums[m]) return findPivoit(nums, m + 1, to);
  return findPivoit(nums, from, m);
}

function findIndex(nums, from, to, T) {
  if (from >= to) return nums[from] == T ? from : -1;
  const m = Math.floor((from + to) / 2);
  if (nums[m] == T) return m;
  if (nums[m] > T) return findIndex(nums, from, m, T);
  return findIndex(nums, m + 1, to, T);
}
