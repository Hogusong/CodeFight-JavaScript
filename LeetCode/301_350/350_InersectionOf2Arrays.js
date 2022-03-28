/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const ans = [], dict = {};
  let index;
  for (let x of nums1) {
      if (dict[x]) {
          index = nums2.indexOf(x, dict[x])
      } else {
          index = nums2.indexOf(x)
      }
      if (index >= 0) {
          dict[x] = index + 1;
          ans.push(x);
      }
  }
  return ans;
};

var intersect = function(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  const ans = [];
  let index = 0;
  for (let x of nums1) {
      while (index < nums2.length) {
          if (nums2[index] == x) {
              ans.push(x);
              index++;
              break;
          } else if (nums2[index] > x) {
              break;
          } else index++;
      }
      if (index >= nums2.length) break;
  }
  return ans;
};