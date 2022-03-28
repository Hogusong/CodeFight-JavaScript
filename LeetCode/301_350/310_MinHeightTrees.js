/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
// Time Limit Exceeded.  66/71 test cases passed.
var findMinHeightTrees = function(n, edges) {
  if (n == 1) return [0];
  if (n == 2) return [0, 1];
  const adj = [];
  for (let i = 0; i < n; i++) adj[i] = [];
  
  for (let [x, y] of edges) {
      adj[x].push(y);
      adj[y].push(x);
  }
  
  const dfs = (i, visited, h) => {
      if (adj[i].length < 1 || visited.has(i)) return h;
      visited.add(i)
      let maxH = 0
      for (let x of adj[i]) {
          maxH = Math.max(maxH, dfs(x, visited, h + 1))
      }
      return maxH;
  }
  
  let minH = n, res = [];
  for (let i = 0; i < n; i++) {
      const height = dfs(i, new Set(), 1);
      if (minH == height) res.push(i);
      else if (minH > height) {
          minH = height;
          res = [i]
      }
  }
  return res;
};

// Passed.
var findMinHeightTrees = function(n, edges) {
  if (n == 1) return [0];
  const degree = new Array(n).fill(0);
  const adj = [], res = [];
  for (let i = 0; i < n; i++) adj[i] = [];
  
  for (let [x, y] of edges) {
      degree[x]++;
      degree[y]++;
      adj[x].push(y);
      adj[y].push(x);
  }
  
  for (let i = 0; i < n; i++) {
      if (degree[i] == 1) res.push(i)
  }
  
  while (n > 2) {
      let size = res.length;
      n -= size;
      while (size-- > 0) {
          const v = res.shift();
          for (let j of adj[v]) {
              degree[j]--;
              if (degree[j] == 1) res.push(j);
          }
      }
  }
  return res;
};