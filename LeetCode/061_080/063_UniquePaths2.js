/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  if (obstacleGrid[0][0] == 1) return 0;
  
  for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
          if (obstacleGrid[r][c] == 1) obstacleGrid[r][c] = -1;
      }
  }
  
  let hasObstacle = false;
  for (let r = 0; r < m; r++) {
      if (hasObstacle || obstacleGrid[r][0] == -1) {
          obstacleGrid[r][0] = 0;
          hasObstacle = true;
      } else obstacleGrid[r][0] = 1;
  }
  hasObstacle = false;
  for (let c = 0; c < n; c++) {
      if (hasObstacle || obstacleGrid[0][c] == -1) {
          obstacleGrid[0][c] = 0;
          hasObstacle = true;
      } else obstacleGrid[0][c] = 1;
  }

  for (let r = 1; r < m; r++) {
      for (let c = 1; c < n; c++) {
          if (obstacleGrid[r][c] == -1) obstacleGrid[r][c] = 0;
          else obstacleGrid[r][c] = obstacleGrid[r-1][c] + obstacleGrid[r][c-1]
      }
  }
  return obstacleGrid[m-1][n-1]
}

// Using Recursion: Time Limit Exceeded. 30/41 test cases passed.
var uniquePathsWithObstacles2 = function(obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  if (obstacleGrid[0][0] == 1) return 0;
  let count = 0;
  
  const travel = (r, c) => {
      if (obstacleGrid[r][c] == 1) return;
      if (r == m - 1 && c == n - 1) count++;
      else {
          if (r < m - 1) travel(r + 1, c);
          if (c < n - 1) travel(r, c + 1);
      }
  }
  
  travel(0, 0);
  return count;
}