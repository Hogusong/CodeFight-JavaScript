/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 var permute = function(nums) {
  if (nums.length < 2) return [nums];

  const len = nums.length;
  let answer = [[]];
  for (let i = 0; i < len; i++) {
    const temp = [...answer];
    answer = [];
    for (let j = 0; j < len; j++) {
      for (let k = 0; k < temp.length; k++) {
        if (!temp[k].includes(nums[j])) {
          answer.push([nums[j], ...temp[k]])
        }
      }
    }
  }
  return answer;
};

// Using Recursion
var permute = function(nums) {
  let result = [];
  
  const helper = (ans) => {
      if (ans.length == nums.length) {
          result.push(ans);
          return;
      }
      for (let n of nums) {
          if (!ans.includes(n)) helper([...ans, n]);
      }
  }
  
  helper([]);
  return result;
}
