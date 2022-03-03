/**
 * @param {number[][]} dungeon
 * @return {number}
 */

// Time Limit Exceeded. 41/45 test cases passed.
var calculateMinimumHP = function(dungeon) {
  let minHP = Number.MAX_VALUE;
  const m = dungeon.length, n = dungeon[0].length;
  const travel = (i, j, need, curr) => {
      if (dungeon[i][j] < 0) {
          if (curr > -dungeon[i][j]) curr += dungeon[i][j];
          else {
              need += -dungeon[i][j] - curr + 1;
              curr = 1;
          }
      } else {
          curr += dungeon[i][j];
      }
      if (i === m - 1 && j === n - 1) {
          minHP = Math.min(minHP, need);
          return;
      }
      if (i < m - 1) travel(i + 1, j, need, curr);
      if (j < n - 1) travel(i, j + 1, need, curr);
  }
  
  travel(0, 0, 1, 1);
  return minHP;
};