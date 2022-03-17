/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
// Time Limit Exceeded. 6/23 test cases passed.
var addOperators = function(num, target) {
  const len = num.length;
  const res = [];

  const dfs = (i, ans) => {
    if (i >= len) {
      if (eval(ans) == target) res.push(ans);
      return ;
    }
    for (let j = i; j < len; j++) {
      if (j > i && num.substring(i, j+1)[0] == '0') continue;
      if (ans.length < 1)
        dfs(j + 1, ans + num.substring(i, j+1))
      else {
        dfs(j + 1, ans + '+' + num.substring(i, j+1))
        dfs(j + 1, ans + '-' + num.substring(i, j+1))
        dfs(j + 1, ans + '*' + num.substring(i, j+1))
      }
    }
  }

  dfs(0, '');
  return res;
};

// Passed.
var addOperators = function(num, target) {
  const len = num.length;
  const res = [];

  const dfs = (i, ans, sum, prev) => {
    if (i >= len) {
      if (sum == target) res.push(ans);
      return ;
    }
    for (let j = i; j < len; j++) {
      if (j > i && num.substring(i, j+1)[0] == '0') continue;
      const n = +num.substring(i, j+1)
      if (ans.length < 1)
        dfs(j + 1, ans + num.substring(i, j+1), n, n);
      else {
        dfs(j + 1, ans + ''+ + num.substring(i, j+1), sum + n, n)
        dfs(j + 1, ans + '-' + num.substring(i, j+1), sum - n, -n)
        dfs(j + 1, ans + '*' + num.substring(i, j+1), sum + prev * (n - 1), n * prev)
      }
    }
  }

  dfs(0, '', 0, 0);
  return res;
};