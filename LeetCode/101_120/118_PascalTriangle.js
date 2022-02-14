/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  const result = [[1]]
  for (let i = 1; i < numRows; i++) {
      const temp = result.at(-1);
      const ans = []
      for (let j = 0; j <= temp.length; j++) {
          if (j == 0) ans[j] = temp[j];
          else if (j == temp.length) ans[j] = temp.at(-1);
          else ans[j] = temp[j-1] + temp[j];
      }
      result.push(ans);
  }
  return result;
}
