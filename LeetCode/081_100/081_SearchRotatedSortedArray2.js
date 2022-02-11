/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
// Using inner function as helper function and the findPivot does not include non_pivot_exist case.
// Non_pivot_exist case will be filtered out before the findPivoit is called.
var search = function(nums, target) {
  const end = nums.length - 1;
  if (end == 0) return target == nums[0];

  const findPivot = (s, e) => {
      if (s >= e) return s;
      const m = Math.floor((s + e) / 2);
      if (nums[m] > nums[m+1]) return m;
      if (nums[s] == nums[m]) {
          for (let i = s; i < e; i++) if (nums[i] > nums[i+1]) return i;
      }
      if (nums[s] < nums[m]) return findPivot(m + 1, e);
      return findPivot(s, m);
  }
  
  const findTarget = (from, to) => {
      if (from >= to) return nums[from] == target;
      const m = Math.floor((from + to) / 2);
      if (nums[m] == target) return true;
      if (nums[m] < target) return findTarget(m + 1, to);
      return findTarget(from, m)
  }
  
  // Non_pivot_exixt case
  if (nums[0] < nums[end]) return findTarget(0, end);
  
  const index = findPivot(0, end);
  
  if (target >= nums[0]) return findTarget(0, index);
  return findTarget(index+1, end);
}

// Using external function as helper function and the findPivot includes non_pivot_exist case.
var search2 = function (nums, target) {
  const last = nums.length - 1
  if (last === 0) return nums[0] === target
  const pivot = findPivot(nums, 0, last)
  if (pivot < 0) return findTarget(nums, 0, last, target)
  if (nums[0] > target) return findTarget(nums, pivot + 1, last, target)
  return findTarget(nums, 0, pivot, target)
}

function findPivot(nums, s, e) {
  if (s >= e) return nums[s] > nums[s + 1] ? s : -1
  const m = Math.floor((s + e) / 2)
  if (nums[m] > nums[m + 1]) return m
  if (nums[m] > nums[s]) return findPivot(nums, m + 1, e)
  if (nums[m] === nums[s])
      for (let i = s; i <= e; i++) if (nums[i] > nums[i + 1]) return i
  return findPivot(nums, s, m)
}

function findTarget(nums, s, e, T) {
  if (s >= e) return nums[s] === T
  const mid = Math.floor((s + e) / 2)
  if (nums[mid] === T) return true
  if (nums[mid] < T) return findTarget(nums, mid + 1, e, T)
  return findTarget(nums, s, mid, T)
}
