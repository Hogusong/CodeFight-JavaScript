/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const ans = [];
  for (let x of nums1) {
      if (nums2.includes(x) && !ans.includes(x)) ans.push(x);
  }
  return ans;
};