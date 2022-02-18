/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (nums.length == 1 || nums[0] < nums.at(-1)) return nums[0];
  
  const searchMin = (from, to) => {
      if (from >= to) return nums[from];
      let m = Math.floor((from + to) / 2);
      if (nums[m] > nums[m+1]) return nums[m+1];
      if (nums[m] < nums[to]) return searchMin(from, m);
      if (nums[m] > nums[to]) return searchMin(m+1, to);
      return searchMin(from, to-1);
  }
  
  return searchMin(0, nums.length - 1);
};

var findMin = function(nums) {
  if (nums.length == 1 || nums[0] < nums.at(-1)) return nums[0];
  
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
  
  const index = findPivot(0, nums.length - 1);
  return nums[index+1];
};
