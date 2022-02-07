/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
  const result = [];
  const len = nums.length;
  nums = nums.sort((a,b) => a-b);
  if (len < 4) return result;
  for (let i = 0; i < len - 3; i++) {
      if (i > 0 && nums[i] == nums[i - 1]) continue;
      for (let j = i + 1; j < len - 2; j++) {
          if (j > i + 1 && nums[j] == nums[j - 1]) continue;
          let l = j + 1, r = len - 1;
          while (l < r) {
              if (l > j + 1 && nums[l] == nums[l - 1]) l++;
              else {
                  const sum = nums[i] + nums[j] + nums[l] + nums[r];
                  if (sum == target) result.push([nums[i], nums[j], nums[l], nums[r]]);
                  if (sum > target) r--;
                  else l++;
              }
          }
      }
  }
  return result;
};
