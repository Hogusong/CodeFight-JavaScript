/**
 * @param {number} columnNumber
 * @return {string}
 */
 var convertToTitle = function(columnNumber) {
  let ans = '', x;
  while (columnNumber > 0) {
      if (columnNumber % 26 == 0) {
          x = 26;
          columnNumber = Math.floor(columnNumber / 26) - 1;
      } else {
          x = columnNumber % 26;
          columnNumber = Math.floor(columnNumber / 26);
      }
      ans = String.fromCharCode(x+64) + ans;
  }
  return ans;
};