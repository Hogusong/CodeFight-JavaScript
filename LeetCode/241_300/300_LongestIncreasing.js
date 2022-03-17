/**
 * @param {number[]} nums
 * @return {number}
 */
// 	Time Limit Exceeded. 22/54 test cases passed.
var lengthOfLIS = function(nums) {
  if (nums.length == 1) return 1;
  
  const dfs = (i, prev, c) => {
      if (i >= nums.length) return c;
      if (nums[i] > prev) {
          return Math.max(dfs(i+1, prev, c), dfs(i+1, nums[i], c+1));
      } else return dfs(i+1, prev, c);
  }
      
  return dfs(0, -Number.MAX_VALUE, 0);    
};

// Dynamic Programming
var lengthOfLIS = function(nums) {
  const n = nums.length
  if (n == 1) return 1;

  const LIS = new Array(n);
  LIS[n-1] = 1;
  
  const getMax = (i) => {
      let maxC = 0;
      for (let j = i + 1; j < n; j++) {
          if (nums[i] < nums[j]) maxC = Math.max(maxC, LIS[j]);
      }
      return maxC;
  }

  let maxCount = 0
  for (let i = n - 2; i >= 0; i--) {
      LIS[i] = 1 + getMax(i);
      maxCount = Math.max(maxCount, LIS[i]);
  }
  
  return maxCount;
};

var lengthOfLIS = function(nums) {
  const n = nums.length

  const LIS = new Array(n);

  for (let i = n - 1; i >= 0; i--) {
      LIS[i] = 1;
      for (let j = i + 1; j < n; j++) {
          if (nums[i] < nums[j]) LIS[i] = Math.max(LIS[i], 1 + LIS[j]);
      }
  }
  
  return Math.max(...LIS);
};