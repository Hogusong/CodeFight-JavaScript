/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
  return checkRow(board) && checkCol(board) && checkSquare(board);
}

function checkRow(board) {
  for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
          if (board[r][c] == '.') continue;
          for (let i = 0; i < 9; i++) {
              if (c != i && board[r][c] == board[r][i]) return false;
          }
      }
  }
  return true;
}

function checkCol(board) {
  for (let c = 0; c < 9; c++) {
      for (let r = 0; r < 9; r++) {
          if (board[r][c] == '.') continue;
          for (let i = 0; i < 9; i++) {
              if (r != i && board[r][c] == board[i][c]) return false;
          }
      }
  }
  return true;    
}

function checkSquare(board) {
  for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
          if (board[r][c] == '.') continue;
          const x = Math.floor(c / 3);
          const y = Math.floor(r / 3);
          for (let i = y * 3; i < y * 3 + 3; i++) {
              for (let j = x * 3; j < x * 3 + 3; j++) {
                  if ((r != i || c != j) && board[r][c] == board[i][j]) return false;
              }
          }
      }
  }
  return true;    
}
