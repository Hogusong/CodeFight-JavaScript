/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  if (k * (k + 1) / 2 > n) return [];
  const output = [];
  
  const combination = (i, sum, arr) => {
      if (sum === n && arr.length == k) {
          output.push(arr);
          return;
      }
      if (arr.length == k || i > 9 || i > n - sum) return;
      combination(i + 1, sum + i, [...arr, i])
      combination(i + 1, sum, arr)
  }
  
  combination(1, 0, []);
  return output;
};