/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
  if (s.length < 2) return 0;
  let open = 0, close = 0, start = 0, end = s.length-1, maxL = 0;
  for (let i = 0; i < s.length; i++) {
      if (s[i] == '(') open++;
      else {
          if (open > 0) {
              open--;
              if (open == 0) maxL = Math.max(maxL, i - start + 1);
          } else start = i + 1;
      }
  }
  
  for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] == ')') close++;
      else {
          if (close > 0) {
              close--;
              if (close < 1) maxL = Math.max(maxL, end - i + 1);
          } else end = i - 1;
      }
  }
  return maxL;
}
