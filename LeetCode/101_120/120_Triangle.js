/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const n = triangle.length;
  if (n == 1) return triangle[0][0];
  const result = [triangle[0]];
  for (let i = 1; i < n; i++) {
      const ans = [];
      const num1 = result.at(-1);
      const num2 = triangle[i];
      for (let j = 0; j <= num1.length; j++) {
          if (j == 0) ans[j] = num1[j] + num2[j];
          else if (j == num1.length) ans[j] = num1[j-1] + num2[j];
          else ans[j] = Math.min(num1[j-1], num1[j]) + num2[j];
      }
      result.push(ans)
  }
  return Math.min(...result.at(-1));
}

var minimumTotal = function(triangle) {
  const n = triangle.length;
  if (n == 1) return triangle[0][0];
  let ans = triangle[0];
  for (let i = 1; i < n; i++) {
      const prev = ans;
      ans = []
      const nums = triangle[i];
      for (let j = 0; j <= prev.length; j++) {
          if (j == 0) ans[j] = prev[j] + nums[j];
          else if (j == prev.length) ans[j] = prev[j-1] + nums[j];
          else ans[j] = Math.min(prev[j-1], prev[j]) + nums[j];
      }
  }
  return Math.min(...ans);
}
