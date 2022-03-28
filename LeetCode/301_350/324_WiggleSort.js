/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  const n = nums.length;
  if (n < 2) return;
  let mid = findKthLargest(nums, Math.floor(n / 2));
  let left = 0, i = 0, right = n - 1;
  while (i <= right) {
      if (nums[newIndex(i, n)] > mid) {
          const a = newIndex(left++, n);
          const b = newIndex(i++, n);
          [nums[a], nums[b]] = [nums[b], nums[a]];
      } else if (nums[newIndex(i, n)] < mid) {
          const a = newIndex(right--, n);
          const b = newIndex(i, n);
          [nums[a], nums[b]] = [nums[b], nums[a]];
      } else i++;
  }
};

function newIndex(index, n) {
  return (1 + 2 * index) % (n | 1);
}

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