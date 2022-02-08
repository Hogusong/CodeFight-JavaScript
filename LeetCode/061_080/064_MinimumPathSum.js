/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
          if (r == 0) grid[r][c] += c > 0 ? grid[r][c-1] : 0;
          else if (c == 0) grid[r][c] += r > 0 ? grid[r-1][c] : 0;
          else grid[r][c] += Math.min(grid[r-1][c], grid[r][c-1]);
      }
  }
  return grid[m-1][n-1];
}