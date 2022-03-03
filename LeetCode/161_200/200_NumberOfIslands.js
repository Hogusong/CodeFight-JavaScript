/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
  let m = grid.length, n = grid[0].length;
  if (m * n == 1) return +grid[0][0];
  
  const nGrid = [];
  nGrid.push(new Array(n + 2).fill('0'))
  for (let arr of grid) nGrid.push(['0', ...arr, '0'])
  nGrid.push(new Array(n + 2).fill('0'))
  m += 2;
  n += 2;
  const visited = new Set();

  const isIsland = (r, c) => {
      if (nGrid[r][c] === '0') return;
      const key = r + ',' + c;
      if (visited.has(key)) return;
      visited.add(key);
      isIsland(r-1, c);
      isIsland(r+1, c);
      isIsland(r, c-1);
      isIsland(r, c+1);
  }

  let count = 0;
  for (let r = 1; r < m - 1; r++) {
      for (let c = 1; c < n - 1; c++) {
          if (nGrid[r][c] == '0' || visited.has(r + ',' + c)) continue;
          isIsland(r, c);
          count++;
      }
  }
  return count;
};

// Better solution. No need extra memory to use SET.
var numIslands = function(grid) {
  let m = grid.length, n = grid[0].length;
  if (m * n == 1) return +grid[0][0];
  
  const nGrid = [];
  nGrid.push(new Array(n + 2).fill('0'))
  for (let arr of grid) nGrid.push(['0', ...arr, '0'])
  nGrid.push(new Array(n + 2).fill('0'))
  m += 2;
  n += 2;

  const isIsland = (r, c) => {
      if (nGrid[r][c] === '0') return;
      nGrid[r][c] = '0';
      isIsland(r-1, c);
      isIsland(r+1, c);
      isIsland(r, c-1);
      isIsland(r, c+1);
  }

  let count = 0;
  for (let r = 1; r < m - 1; r++) {
      for (let c = 1; c < n - 1; c++) {
          if (nGrid[r][c] == '0') continue;
          isIsland(r, c);
          count++;
      }
  }
  return count;
};