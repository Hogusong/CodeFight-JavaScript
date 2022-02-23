/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Using Recursion
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

// Using Array: nees less space than above.
var permuteUnique = function(nums) {
    const set = new Set();
    let result = [[]];
    for (let i = 0; i < nums.length; i++) {
        const temp = result;
        result = [];
        for (let arr of temp) {
            for (let j = 0; j < nums.length; j++) {
                if (!arr.includes(j)) result.push([...arr, j]);
            }
        }
    }
    const ans = [];
    for (let arr of result) {
        const temp = [];
        for (let i of arr) temp.push(nums[i]);
        const key = temp.join(',');
        if (!set.has(key)) {
            ans.push(temp);
            set.add(key);
        }
    }
    return ans;
};