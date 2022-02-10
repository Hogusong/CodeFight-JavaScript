/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
  const m = word1.length;
  const n = word2.length;
  if (m * n == 0) return m == 0 ? n : m;
  const matrix = [];
  for (let r = 0; r <= m; r++) matrix[r] = [];
  
  for (let r = 0; r <= m; r++) {
      for (let c = 0; c <= n; c++) {
          if (r == 0) matrix[r][c] = c;
          else if (c == 0) matrix[r][c] = r;
          else {
              if (word1[r-1] == word2[c-1]) {
                  matrix[r][c] = matrix[r-1][c-1];
              } else {
                  let minV = Math.min(matrix[r-1][c], matrix[r][c-1]);
                  matrix[r][c] = Math.min(minV, matrix[r-1][c-1]) + 1
              }
          }
      }
  }
  return matrix[m][n];
}