/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
  if (num.length < 2) return false;
  
  const dfs = (start, prev, curr) => {
      let str = num.substring(start);
      if (str.length > 1 && str[0] == '0') return false;
      if (prev + curr == +str) return true;
      
      for (let i = start + 1; i < num.length; i++) {
          str = +num.substring(start, i);
          if (prev + curr == str) {
              if (dfs(i, curr, str)) return true;
          }
      }
      return false
  }
  
  for (let i = 1; i < num.length - 1; i++) {
      const prev = num.substring(0, i);
      if (prev.length > 1 && prev[0] == '0') continue;
      for (let j = i + 1; j < num.length; j++) {
          const curr = num.substring(i, j);
          if (curr.length > 1 && curr[0] == '0') continue;
          if (dfs(j, +prev, +curr)) return true;
      }
      
  }
  return false;
};