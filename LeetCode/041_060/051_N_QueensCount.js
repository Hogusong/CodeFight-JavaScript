/**
 * @param {number} n
 * @return {number}
 */
 var totalNQueens = function(n) {
  const helper = (list) => {
      if (list.length == n) {
          return 1;
      }
      let count = 0;
      for (let i = 0; i < n; i++) {
          if (isValidCell(list, i)) {
              list.push(i);
              count += helper(list);
              list.pop();
          }
      }
      return count;
  }

  return helper([]);
};

function isValidCell(list, c) {
  const row = list.length;
  for (let r = 0; r < row; r++) {
      if (c == list[r] || row - c == r - list[r] || row + c == r + list[r]) return false;
  }
  return true;
}