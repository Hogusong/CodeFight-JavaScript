/**
 * @param {number[]} nums
 * @return {number}
 */

// Time Limit Exceeded.  55/68 test cases passed.
var rob = function(nums) {
  const len = nums.length;
  if (len < 2) return nums[0];
  
  const robbing = (i, robbed) => {
      if (i >= len) {
          return 0;
      }
      if (nums[i] === 0 || robbed) return robbing(i + 1, false);
      return Math.max(nums[i] + robbing(i + 1, true), robbing(i + 1, robbed));
  }
  
  return robbing(0, false);
};

// Recursion and Dynamic Programming using 2D array. Passed.
var rob = function(nums) {
  const len = nums.length;
  if (len < 2) return nums[0];
  const dp = [];
  for (let r = 0; r <= len; r++) dp[r] = [0,0];
  const robbing = (i, robbed) => {
      if (i >= len) {
          return 0;
      }
      if (dp[i][robbed] > 0) return dp[i][robbed]
      if (nums[i] === 0 || robbed) dp[i][robbed] = robbing(i + 1, 0);
      else dp[i][robbed] = Math.max(nums[i] + robbing(i + 1, 1), robbing(i + 1, robbed));
      return dp[i][robbed];
  }
  
  return robbing(0, 0);
};

// Recursion and Dynamic Programming using Dictionary. Passed.
var rob = function(nums) {
  const len = nums.length;
  if (len < 2) return nums[0];
  const dict = {}
  const robbing = (i, robbed) => {
      if (i >= len) {
          return 0;
      }
      const key = i + ',' + robbed;
      if (dict.hasOwnProperty(key)) return dict[key];
      if (nums[i] === 0 || robbed) dict[key] = robbing(i + 1, 0);
      else dict[key] = Math.max(nums[i] + robbing(i + 1, 1), robbing(i + 1, robbed));
      return dict[key];
  }
  
  return robbing(0, 0);
};

var rob = function(nums) {
  let rob1 = 0, rob2 = 0;
  for (let n of nums) {
      const temp = Math.max(rob1 + n, rob2);
      rob1 = rob2;
      rob2 = temp;
  }
  return rob2;
};