/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var gameOfLife = function(board) {
  const m = board.length, n = board[0].length;
  
  const isLivingCell = (r, c) => {
      if (r >= 0 && c >= 0 && r < m && c < n) {
          return board[r][c] > 0;
      }
      return false;
  }
  
  const countLives = (r, c) => {
      let count = 0;
      if (isLivingCell(r-1, c)) count++;
      if (isLivingCell(r+1, c)) count++;
      if (isLivingCell(r, c-1)) count++;
      if (isLivingCell(r, c+1)) count++;
      if (isLivingCell(r-1, c-1)) count++;
      if (isLivingCell(r-1, c+1)) count++;
      if (isLivingCell(r+1, c-1)) count++;
      if (isLivingCell(r+1, c+1)) count++;
      return count;        
  }
  
  for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
          const lives = countLives(r, c);
          if (board[r][c] == 0) {
              if (lives == 3) board[r][c] = -1
          }
          if (board[r][c] == 1) {
              if (lives < 2 || lives > 3) board[r][c] = 2;
          }
      }
  }
  
  for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
          if (board[r][c] == -1) board[r][c] = 1;
          if (board[r][c] == 2) board[r][c] = 0;
      }
  }
};