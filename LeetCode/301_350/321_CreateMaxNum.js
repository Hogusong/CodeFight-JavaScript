/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
  let ans = [];    
  for (let i = 0; i <= k; i++) {
      if (i > nums1.length || k - i > nums2.length) continue;
      const max1 = maxLex(nums1, i);
      const max2 = maxLex(nums2, k - i);
      const merged = [];
      let a = 0, b = 0;
      while (a < max1.length || b < max2.length) {
          if (a >= max1.length) merged.push(max2[b++]);
          else if (b >= max2.length) merged.push(max1[a++]);
          else if (max1[a] < max2[b]) merged.push(max2[b++]);
          else if (max1[a] > max2[b]) merged.push(max1[a++]);
          else {
              if (greater(max1, max2, a, b)) merged.push(max1[a++]);
              else merged.push(max2[b++]);
          }
      }
      if (greater(merged, ans, 0, 0)) ans = merged;
  }
  return ans;
};

function maxLex(nums, k) {
  let n = nums.length, res = [];
  for (let i = 0; i < n; i++) {
      while (res.length > 0 && nums[i] > res.at(-1) && k - res.length <= n - i - 1) {
          res.pop();
      }
      if (res.length < k) res.push(nums[i]);
  }
  return res;
}

function greater(nums1, nums2, i, j) {
  while (i < nums1.length || j < nums2.length) {
      if (i >= nums1.length) return false;
      if (j >= nums2.length) return true;
      if (nums1[i] < nums2[j]) return false;
      if (nums1[i] > nums2[j]) return true;
      i++;
      j++;
  }
  return true;
}