/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// approach from 
var coinChange = function(coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let amt = 1; amt < dp.length; amt++) {
      for (let c of coins) {
          if (amt - c >= 0) 
              dp[amt] = Math.min(dp[amt], 1 + dp[amt - c]);
      }
  }
  return dp[amount] <= amount ? dp[amount] : -1;
};

var coinChange = function(coins, amount) {
  const dp = new Array(amount+1).fill(-1);
  dp[0] = 0;
  for (let i = 0; i < dp.length; i++) {
      if (dp[i] < 0) continue;
      for (let c of coins) {
          if (i + c >= dp.length) continue;
          if (dp[i + c] < 0) dp[i + c] = dp[i] + 1;
          else dp[i + c] = Math.min(dp[i + c], dp[i] + 1);
      }
  }
  return dp[amount];
};