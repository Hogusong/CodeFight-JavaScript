/**
 * @param {number[]} nums
 * @return {number}
 */
// Time Limit Exceeded.  55/75 test cases passed.
var rob = function(nums) {
  const len = nums.length;
  if (len < 1) return 0;
  if (len == 1) return nums[0];
  
  const helper = (i, robbed, taken) => {
      if (i == len) return 0;
      let maxA = 0;
      if (robbed || nums[i] == 0) {
          maxA = helper(i+1, 0, taken);
      } else {
          if (i == 0) 
              maxA = Math.max(nums[i] + helper(i+1, 1, 1), helper(i+1, robbed, taken));
          else if (i == len - 1 && taken) 
              maxA = helper(i+1, robbed, taken);
          else
              maxA = Math.max(nums[i] + helper(i+1, 1, taken), helper(i+1, robbed, taken));
      }
      return maxA;
  }
  
  return helper(0, 0, 0);
};

// Using Dictionary for DP.  Passed.
var rob = function(nums) {
  const len = nums.length, dict = {};
  if (len < 1) return 0;
  if (len == 1) return nums[0];
  
  const helper = (i, robbed, taken) => {
      if (i == len) return 0;
      const key = i + ',' + robbed + ',' + taken;
      if (dict[key]) return dict[key];

      if (robbed || nums[i] == 0) {
          dict[key] = helper(i+1, 0, taken)
      } else {
          if (i == 0) 
              dict[key] = Math.max(nums[i] + helper(i+1, 1, 1), helper(i+1, robbed, taken));
          else if (i == len - 1 && taken) 
              dict[key] = helper(i+1, robbed, taken);
          else
              dict[key] = Math.max(nums[i] + helper(i+1, 1, taken), helper(i+1, robbed, taken));
      }
      return dict[key];
  }
  
  return helper(0, 0, 0);
};

// Using 3D Array for DP.  Passed.
var rob = function(nums) {
  const len = nums.length, arr = [];
  if (len < 1) return 0;
  if (len === 1) return nums[0];
  for (let i = 0; i < len; i++) {
      const first = []
      for (let j = 0; j < 2; j++) {
          first.push([0,0]);
      }
      arr.push(first);
  }
  
  const helper = (i, robbed, taken) => {
      if (i === len) return 0;
      const key = i + ',' + robbed + ',' + taken;
      if (arr[i][robbed][taken]) return arr[i][robbed][taken];

      let maxA;
      if (robbed || nums[i] === 0) {
          maxA = helper(i+1, 0, taken)
      } else {
          if (i === 0) 
              maxA = Math.max(nums[i] + helper(i+1, 1, 1), helper(i+1, robbed, taken));
          else if (i === len - 1 && taken) 
              maxA = helper(i+1, robbed, taken);
          else
              maxA = Math.max(nums[i] + helper(i+1, 1, taken), helper(i+1, robbed, taken));
      }
      arr[i][robbed][taken] = maxA
      return maxA;
  }
  
  return helper(0, 0, 0);
};
