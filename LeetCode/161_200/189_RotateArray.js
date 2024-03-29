/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Time Limit Exceeded. 37/38 test cases passed.
var rotate = function(nums, k) {
  const len = nums.length;
  if (k == 0 || len == 1) return;
  if (k > len) k = k % len;
  let count = Math.floor(len / k) - 1
  let index = len - 1;
  while (count > 0) {
      let moved = 0;
      while (moved < k) {
          const temp = nums[index];
          nums[index] = nums[index-k]
          nums[index-k] = temp;
          index--;
          moved++;
      }
      count--;
  }
  if (len % k > 0) {
      index = index - k + 1;
      let start = 0;
      while (start < k) {
          const temp = nums[index];
          for (let i = index; i > start; i--) {
              nums[i] = nums[i-1];
          }
          nums[start++] = temp;
          index++;
      }
  }
};

var rotate = function(nums, k) {
    const len = nums.length;
    if (k == 0 || len == 1) return;
    if (k > len) k = k % len;
    
    const swap = (left, right) => {
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }
    
    swap(0, len - 1);   // Reverse all elements
    swap(0, k - 1);     // Reverse front k elements
    swap(k, len - 1);   // Reverse the lest elements.
};