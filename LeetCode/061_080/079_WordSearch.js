/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// Using 2D Array to check VISITED or NOT. More faster.
var exist = function(board, word) {
  const m = board.length, n = board[0].length;
  const visited = [];
  for (let i = 0; i < m; i++) {
      const row = [];
      for (let j = 0; j < n; j++) row[j] = false;
      visited[i] = row;
  }
  
  const findWord = (r, c, i) => {
      if (!isValid(r, c)) return false;
      if (board[r][c] != word[i]) return false;
      if (i == word.length - 1) return true;
      visited[r][c] = true;;
      const up = findWord(r+1, c, i+1);
      const down = findWord(r-1, c, i+1);
      const right = findWord(r, c+1, i+1);
      const left = findWord(r, c-1, i+1);
      visited[r][c] = false;
      return up || down || right || left;
  }
  
  const isValid = (r, c) => {
      if (r < 0 || c < 0 || r >= m || c >= n || visited[r][c]) return false;
      return true;
  }
  
  for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
          if (findWord(r, c, 0, new Set())) return true;
      }
  }
  return false;
}

// Using Set to check VISITED or NOT.
var exist = function(board, word) {
  const m = board.length, n = board[0].length;
  const findWord = (r, c, i, set) => {
      if (!isValid(r, c, set)) return false;
      if (board[r][c] != word[i]) return false;
      if (i == word.length - 1) return true;
      set.add(r + ',' + c);
      const up = findWord(r+1, c, i+1, set);
      const down = findWord(r-1, c, i+1, set);
      const right = findWord(r, c+1, i+1, set);
      const left = findWord(r, c-1, i+1, set);
      set.delete(r + ',' + c);
      return up || down || right || left;
  }
  
  const isValid = (r, c, set) => {
      if (r < 0 || c < 0 || r >= m || c >= n) return false;
      return !set.has(r + ',' + c);
  }
  
  for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
          if (findWord(r, c, 0, new Set())) return true;
      }
  }
  return false;
}
