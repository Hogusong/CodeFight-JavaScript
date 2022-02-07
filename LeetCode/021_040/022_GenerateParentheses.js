/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  const result = [];
  const generate = (open, close, str) => {
      if (open == 0 && close == 0) {
          result.push(str);
          return;
      }
      if (open == close) {
          generate(open - 1, close, str + '(');
      } else if (open == 0) {
          generate(open, close - 1, str + ')');
      } else {        
          generate(open - 1, close, str + '(');
          generate(open, close - 1, str + ')');
      }
  };
  
  generate(n, n, '');
  return result;
};

var generateParenthesis2 = function(n) {
  ans = [];
  backtrack(n);
  return ans;
};

function backtrack(n, S='', left = 0, right = 0) {
  if (S.length === 2*n) {
    ans.push(S)
    return
  }
  if (left < n) backtrack(n, S+'(', left+1, right);
  if (right < left) backtrack(n, S+')', left, right+1);
}