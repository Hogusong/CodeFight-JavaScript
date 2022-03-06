/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
// Time Limit Exceeded. 42/63 test cases passed.
var findWords = function(board, words) {
  const output = []
  for (let word of words) {
      if (findWord(board, word)) output.push(word);
  }
  return output
};

function findWord(board, word) {
  const m = board.length, n = board[0].length;
  if (word.length > m * n) return false;
  
  const dfs = (r, c, i, taken) => {
      if (i >= word.length) return true;
      if (r < 0 || c < 0 || r >= m || c >= n) return false;
      if (taken.has(r + ',' + c)) return false;
      if (board[r][c] != word[i]) return false;
      taken.add(r + ',' + c);
      i++;
      const result = dfs(r-1, c, i, taken) || dfs(r+1, c, i, taken) || 
            dfs(r, c-1, i, taken) || dfs(r, c+1, i, taken);
      taken.delete(r + ',' + c);
      return result;
  }
  
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (dfs(i, j, 0, new Set())) return true;
      }
  }
  return false;
}

// Time Limit Exceeded. 62/63 test cases passed.
var findWords = function(board, words) {
  const output = []
  for (let word of words) {
      if (findWord(board, word)) output.push(word);
  }
  return output
};

function findWord(board, word) {
  const m = board.length, n = board[0].length, wLen = word.length;
  if (m * n < wLen) return false;
  const visited = [];
  for (let r = 0; r < m; r++) visited[r] = [];
  
  const existed = (r, c, i) => {
      if (i >= wLen) return true;
      if (r < 0 || c < 0 || r >= m || c >= n) return false;
      if (visited[r][c] || board[r][c] != word[i]) return false;
      visited[r][c] = true;
      const up = existed(r - 1, c, i + 1);
      const down = existed(r + 1, c, i + 1);
      const left = existed(r, c - 1, i + 1);
      const right = existed(r, c + 1, i + 1);
      visited[r][c] = false;
      return up || down || left || right;
  }
  
  for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
          if (board[r][c] == word[0]) {
              if (existed(r, c, 0)) return true;
          }
      }
  }
  
  return false;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - passed
class TrieNode {
  constructor() {
      this.children = {};
      this.endOfWord = false;
  }
  
  add(word) {
      let curr = this;
      for (let w of word) {
          if (!curr.children[w]) curr.children[w] = new TrieNode();
          curr = curr.children[w];
      }
      curr.endOfWord = true;
  }
}

var findWords = function(board, words) {
  const root = new TrieNode();
  for (let word of words) root.add(word);
  
  const m = board.length, n = board[0].length;
  const visited = [], result = new Set();
  for (let i = 0; i < m; i++) visited.push([]);
  
  const dfs = (r, c, node, word) => {
      if (r < 0 || c < 0 || r == m || c == n || visited[r][c]) return;
      if (!node.children[board[r][c]]) return;
      visited[r][c] = true;
      node = node.children[board[r][c]];
      word += board[r][c];
      if (node.endOfWord) result.add(word);
      dfs(r-1, c, node, word);
      dfs(r, c-1, node, word);
      dfs(r+1, c, node, word);
      dfs(r, c+1, node, word);
      visited[r][c] = false;
  }
  
  for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
          dfs(r, c, root, '');
      }
  }
  return Array.from(result);
};
