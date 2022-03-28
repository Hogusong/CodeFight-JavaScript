/**
 * @param {string} s
 * @return {string[]}
 */
 var removeInvalidParentheses = function(s) {
  let countToRemove = getCountToRemove(s);
  const result = new Set();
  
  const dfs = (i, count, open, temp) => {
      if (i === s.length) {
          if (count == 0 && open == 0) result.add(temp);
          return;
      }
      if (count < 0) return;
      
      if (s[i] == '(') {
          dfs(i + 1, count, open + 1, temp + s[i]);
          dfs(i + 1, count - 1, open, temp);
      } else if (s[i] == ')') {
          if (open > 0) dfs(i + 1, count, open - 1, temp + s[i]);
          dfs(i + 1, count - 1, open, temp);
      } else dfs(i + 1, count, open, temp + s[i])
  }
  
  dfs(0, countToRemove, 0, '');
  return Array.from(result);
}

function getCountToRemove(s) {
  let close = 0, open = 0;
  for (let i = 0; i < s.length; i++) {
      if (s[i] == '(') open++;
      else if (s[i] == ')') {
          if (open < 1) close++;
          else open--;
      }
  }
  return close + open;
};