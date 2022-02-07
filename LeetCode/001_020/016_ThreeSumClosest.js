/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
  nums = nums.sort((a,b) => a - b);
  const set = new Set();
  const len = nums.length;
  for (let i = 0; i < len - 2; i++) {
      if (i > 0 && nums[i] == nums[i-1]) continue;
      let j = i + 1, k = len - 1;
      while (j < k) {
          if (nums[i] + nums[j] + nums[k] == target) return target;
          set.add(nums[i] + nums[j] + nums[k]);
          if (nums[i] + nums[j] + nums[k] > target) k--;
          else j++;
      }
  }
  let diff = 1
  while (true) {
      if (set.has(target - diff)) return target - diff;
      if (set.has(target + diff)) return target + diff;
      diff++;
  }
  
}