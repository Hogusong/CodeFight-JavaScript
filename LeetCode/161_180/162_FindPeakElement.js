/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
  const len = nums.length;
  if (len == 1) return 0;
  if (len == 2) return nums[0] > nums[1] ? 0 : 1;
  
  const findPeak = (s, e) => {
      if (s >= e) return s;
      const m = Math.floor((s + e) / 2);
      if ((m == 0 || nums[m-1] < nums[m]) && nums[m] > nums[m+1]) return m;
      if (m == 0 || nums[m-1] < nums[m]) return findPeak(m+1, e);
      return findPeak(s, m);
  }
  return findPeak(0, len-1);
}