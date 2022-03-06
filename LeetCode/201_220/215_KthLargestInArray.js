/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  k = nums.length - k;
  
  const quickSelect = (l, r) => {
      let point = l;
      for (let i = l; i < r; i++) {
          if (nums[i] <= nums[r]) {
              if (i > point) {
                  [nums[point], nums[i]] = [nums[i], nums[point]]
              }
              point++;
          }
      }
      [nums[point], nums[r]] = [nums[r], nums[point]];
      if (point === k) return nums[k];
      if (point < k) return quickSelect(point+1, r);
      return quickSelect(l, point-1);
  }
  return quickSelect(0, nums.length-1);
}
