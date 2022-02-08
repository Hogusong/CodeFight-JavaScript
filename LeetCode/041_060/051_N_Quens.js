/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
  const result = [];
  
  const helper = (list) => {
      if (list.length == n) {
          const temp = [];
          for (let x of list) {
              let str = "";
              for (let i = 0; i < n; i++) str += (i == x ? 'Q' : '.');
              temp.push(str)
          }
          result.push(temp);
          return
      }
      for (let i = 0; i < n; i++) {
          if (isValidCell(list, i)) {
              list.push(i);
              helper(list);
              list.pop();
          }
      }
  }
  
  helper([]);
  return result;
}

function isValidCell(list, c) {
  const row = list.length;
  for (let r = 0; r < list.length; r++) {
      if (c == list[r] || row - c == r - list[r] || row + c == r + list[r]) return false;
  }
  return true;
}
