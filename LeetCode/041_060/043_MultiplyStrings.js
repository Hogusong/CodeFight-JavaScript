/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function(num1, num2) {
  if (num1 == "0" || num2 == "0") return "0";
  const len1 = num1.length;
  const len2 = num2.length;
  const m = len2 + 3;
  const n = len1 + len2;
  const matrix = [];
  for (let i = 0; i < m; i++) {
      const row = [];
      for (let j = 0; j < n; j++) row[j] = 0;
      matrix[i] = row;
  }
  
  for (let i = 0; i < len1; i++) {
      matrix[0][i] = +num1[len1-i-1];
  }
  for (let i = 0; i < len2; i++) {
      matrix[1][i] = +num2[len2-i-1];
  }

  for (let i = 0; i < len2; i++) {
      for (let j = 0; j < len1; j++) {
          let c = i + j;
          let prod = matrix[1][i] * matrix[0][j] + matrix[i+2][c];
          matrix[i+2][c] = prod % 10;
          matrix[i+2][c+1] = matrix[i+2][c+1] + Math.floor(prod / 10);
      }
  }

  let up = 0;
  for (let c = 0; c < n; c++) {
      let sum = up;
      for (let r = 2; r < m - 1; r++) {
          sum += matrix[r][c];
      }
      up = Math.floor(sum / 10);
      matrix[m-1][c] = sum % 10;
  }

  let ans = matrix[m-1][n-1] == 0 ? "" : "" + matrix[m-1][n-1];
  for (let i = n-2; i >= 0; i--) {
      ans += matrix[m-1][i];
  }
  return ans;
}

function printMatrix(matrix, m) {
  for (let r = 0; r < m; r++) {
      console.log(matrix[r])
  }
}
