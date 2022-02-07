/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  const len = nums.length;
  nums = nums.sort((a,b) => a-b);
  const ans = [];
  if (len < 3) return ans;
  for (let i = 0; i < len - 2; i++) {
      if (nums[i] > 0) break;
      if (i > 0 && nums[i-1] == nums[i]) continue;
      let j = i + 1, k = len - 1;
      while (j < k) {
          if (nums[i] + nums[j] > 0) break;
          if (j > i + 1 && nums[j-1] == nums[j]) {
              j++;
              continue;
          }
          if (nums[i] + nums[j] + nums[k] == 0) {
              ans.push([nums[i],  nums[j], nums[k]]);
          } 
          if (nums[i] + nums[j] + nums[k] > 0) k--;
          else j++;
      }
  }
  return ans;
}