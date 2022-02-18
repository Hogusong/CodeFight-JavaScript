/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
  if (nums.length == 1 || nums[0] < nums.at(-1)) return nums[0];
  
  const findPivot = (s, e) => {
      if (s >= e) return e;
      const m = Math.floor((s + e) / 2);
      if (nums[m] > nums[m+1]) return m;
      if (nums[0] < nums[m]) return findPivot(m+1, e);
      return findPivot(s, m);
  }
  
  const index = findPivot(0, nums.length - 1)
  return nums[index+1];
};