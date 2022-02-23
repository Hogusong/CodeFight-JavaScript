/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  const m = board.length, n = board[0].length;
  if (m < 3 || n < 3) return board;
  
  // flip all 'O' to '.'
  for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
          if (board[r][c] == 'O') board[r][c] = '.'
      }
  }
  
  // flip all connected '.' of left and right lines to 'O'
  for (let r = 0; r < m; r++) {
      if (board[r][0] == '.') flipping(board, r, 0);
      if (board[r][n-1] == '.') flipping(board, r, n-1);
  }
  
  // flip all connected '.' of top and bottom lines to 'O'
  for (let c = 0; c < n; c++) {
      if (board[0][c] == '.') flipping(board, 0, c);
      if (board[m-1][c] == '.') flipping(board, m-1, c);
  }
  
  // flip all remainning '.' to 'X'
  for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
          if (board[r][c] == '.') board[r][c] = 'X'
      }
  }
} 

function flipping(board, r, c) {
  if (r < 0 || c < 0 || r >= board.length || c >= board[0].length) return
  if (board[r][c] != '.') return;
  board[r][c] = 'O';
  flipping(board, r-1, c);
  flipping(board, r+1, c);
  flipping(board, r, c+1);
  flipping(board, r, c-1);    
}

var solve = function(board) {
  if (board.length < 3 || board[0].length < 3) return board;
  const m = board.length,  n = board[0].length, stack = [];
  dict = {};

  //  left --> right
  for (let i = 0; i < n; i++) {
    if (board[0][i] === 'O') {
      dict[0+':'+i] = 'O';
      stack.push([0, i]);
    }
    if (board[m-1][i] === 'O') {
      dict[(m-1)+':'+i] = 'O';
      stack.push([m-1, i]);
    }
  }
  //  top --> bottom
  for (let i = 1; i < m-1; i++) {
    if (board[i][0] === 'O') {
      dict[i+':'+0] = 'O';
      stack.push([i, 0]);
    }
    if (board[i][n-1] === 'O') {
      dict[i+':'+(n-1)] = 'O';
      stack.push([i, n-1]);
    }
  }
  while (stack.length > 0) {
    const [r,c] = stack.pop();
    if (isValid(r-1,c, m, n) && board[r-1][c] === 'O' && !dict[(r-1)+':'+c]) {
      dict[(r-1)+':'+c] = 'O';
      stack.push([r-1, c])
    }
    if (isValid(r+1,c, m, n) && board[r+1][c] === 'O' && !dict[(r+1)+':'+c]) {
      dict[(r+1)+':'+c] = 'O';
      stack.push([r+1, c])
    }
    if (isValid(r,c-1, m, n) && board[r][c-1] === 'O' && !dict[r+':'+(c-1)]) {
      dict[r+':'+(c-1)] = 'O';
      stack.push([r, c-1])
    }
    if (isValid(r,c+1, m, n) && board[r][c+1] === 'O' && !dict[r+':'+(c+1)]) {
      dict[r+':'+(c+1)] = 'O';
      stack.push([r, c+1])
    }
  }

  for (let i = 1; i < m-1; i++) {
    for (let j = 1; j < n-1; j++) {
      if (board[i][j] === 'O' && !dict[i+':'+j]) board[i][j] = 'X';
    }
  }
  return board;
}

function isValid(r, c, m, n) {
  return r > 0 && r < m-1 && c > 0 && c < n-1
}

var solve = function(board) {
  if (board.length < 3 || board[0].length < 3) return board;
  const m = board.length,  n = board[0].length, stack = [];
  
  const isValid = (r, c) => r * c > 0 && r < m - 1 && c < n - 1;
  
  const flipping = (r, c) => {
      if (board[r][c] != 'O') return;
      board[r][c] = '.';
      if (isValid(r - 1, c)) flipping(r - 1, c);
      if (isValid(r, c - 1)) flipping(r, c - 1);
      if (isValid(r + 1, c)) flipping(r + 1, c);
      if (isValid(r, c + 1)) flipping(r, c + 1);
  }

  for (let r = 0; r < m; r++) {
      flipping(r, 0);
      flipping(r, n - 1);
  }
  for (let c = 0; c < n; c++) {
      flipping(0, c);
      flipping(m - 1, c);
  }
  
  for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
          board[r][c] = board[r][c] == '.' ? 'O' : 'X'; 
      }
  }
}

// Best(Simple) solution.
var solve = function(board) {
  if (board.length < 3 || board[0].length < 3) return board;
  const m = board.length,  n = board[0].length;
  
  const isValid = (r, c) => r * c > 0 && r < m - 1 && c < n - 1;
  
  const flipping = (r, c) => {
      if (board[r][c] != 'O') return;
      board[r][c] = '.';
      if (isValid(r - 1, c)) flipping(r - 1, c);
      if (isValid(r, c - 1)) flipping(r, c - 1);
      if (isValid(r + 1, c)) flipping(r + 1, c);
      if (isValid(r, c + 1)) flipping(r, c + 1);
  }

  for (let r = 0; r < m; r++) {
      flipping(r, 0);
      flipping(r, n - 1);
  }
  for (let c = 0; c < n; c++) {
      flipping(0, c);
      flipping(m - 1, c);
  }
  
  for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
          board[r][c] = board[r][c] == '.' ? 'O' : 'X'; 
      }
  }
}