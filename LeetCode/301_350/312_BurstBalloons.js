/**
 * @param {number[]} nums
 * @return {number}
 */
// Time Limit Exceeded.  31/73 test cases passed.
var maxCoins = function(nums) {
  const dfs = (s, e, L, R) => {
      if (s > e) return 0;
      let maxP = 0;
      for (let i = s; i <= e; i++) {
          const coins = L * nums[i] * R + dfs(s, i-1, L, nums[i]) + dfs(i+1, e, nums[i], R);
          maxP = Math.max(maxP, coins);
      }
      return maxP;
  }
  
  let maxP = 0;
  for (let i = 0; i < nums.length; i++) {
      const point = nums[i] + dfs(0, i-1, 1, nums[i]) + dfs(i+1, nums.length - 1, nums[i], 1);
      maxP = Math.max(maxP, point);
  }
  return maxP;
};

var maxCoins = function(nums) {
  const dict = {};
  
  const dfs = (s, e, L, R) => {
      if (s > e) return 0;
      const key = s + ',' + e
      if (dict[key]) return dict[key];
      dict[key] = 0;
      for (let i = s; i <= e; i++) {
          const coins = L * nums[i] * R + dfs(s, i-1, L, nums[i]) + dfs(i+1, e, nums[i], R);
          dict[key] = Math.max(dict[key], coins);
      }
      return dict[key];
  }
  
  return dfs(0, nums.length - 1, 1, 1);
};

// Same as above.
var maxCoins = function(nums) {
  nums = [1, ...nums, 1];
  const dict = {};
  
  const dfs = (s, e) => {
      if (s > e) return 0;
      const key = s + ',' + e
      if (dict[key]) return dict[key];

      let maxP = 0;
      for (let i = s; i <= e; i++) {
          const coins =  nums[s-1]* nums[i] * nums[e+1] + dfs(s, i-1) + dfs(i+1, e);
          maxP = Math.max(maxP, coins);
      }
      dict[key] = maxP;
      return maxP;
  }
  
  return dfs(1, nums.length - 2);
};