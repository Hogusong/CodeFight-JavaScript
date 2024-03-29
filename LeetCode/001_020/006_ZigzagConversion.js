/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
  if (numRows == 1) return s;
  const ans = [];
  for (let i = 0; i < numRows; i++) ans[i] = "";
  let index = 0, down = true;
  for (let i = 0; i < s.length; i++) {
      ans[index] += s[i];
      if (index == numRows - 1) {
          index--;
          down = false;
      } else if (index == 0) {
          index++;
          down = true;
      } else index += down ? 1 : -1;
  }
  return ans.join("");
};

// More simple than above.
var convert = function(s, numRows) {
    if (numRows == 1) return s;
    const ans = new Array(numRows).fill('');
    let index = 0, direction = 1;
    for (let i = 0; i < s.length; i++) {
        ans[index] += s[i];
        index += direction;
        if (index == numRows - 1) direction = -1;
        else if (index == 0) direction = 1
    }
    return ans.join("");
};
