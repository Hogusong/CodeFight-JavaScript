/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
  const set = new Set();
  const result = [];
  const helper = (ans) => {
      if (ans.length == nums.length) {
          const temp = [];
          for (let i of ans) temp.push(nums[i]);
          const key = temp.join(',');
          if (!set.has(key)) {
              result.push(temp);
              set.add(key)
          }
          return;
      }
      for (let i = 0; i < nums.length; i++) {
          if (!ans.includes(i)) {
              helper([...ans, i]);
          }
      }
  }
  
  helper([]);
  return result;
};