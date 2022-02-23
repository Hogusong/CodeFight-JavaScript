/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// Using 2D Array
var isMatch = function(s, p) {
  const matrix = [];
  const helper = (i, j) => {
      if (j == p.length) return i == s.length;
      if (matrix[i][j]) return matrix[i][j] == 'T';
      const firstMatch = i < s.length && (s[i] == p[j] || p[j] == '.');
      let result;
      if (p[j + 1] == '*') {
          result = helper(i, j + 2) || (firstMatch && helper(i + 1, j));
      } else result = firstMatch && helper(i + 1, j + 1);
      matrix[i][j] = result ? 'T' : 'F';
      return result;
  }
  
  for (let i = 0; i <= s.length; i++) matrix[i] = []
  
  return helper(0, 0);
};

// Using Dictionary.
var isMatchRec = function(s, p) {
  dict = {};
  const helper = (i, j) => {
      if (j == p.length) return i == s.length;
      const key = i + ':' + j;
      if (!dict.hasOwnProperty(key)) {
          const firstMatch = i < s.length && (s[i] == p[j] || p[j] == '.');
          if (p[j+1] == '*') {
              dict[key] = helper(i, j + 2) || (firstMatch && helper(i + 1, j));
          } else dict[key] = firstMatch && helper(i + 1, j + 1);
      }
      return dict[key];
  }
  return helper(0, 0)
};