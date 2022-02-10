/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  let result = [[]];
  for (let x of nums) {
      const temp = [...result];
      for (let arr of temp) {
          result.push([...arr, x]);
      }
  }
  return result;
};