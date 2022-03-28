/**
 * @param {number[]} prices
 * @return {number}
 */
// Time Limit Exceeded.  208/210 test cases passed.
var maxProfit = function(prices) {
    
  const dfs = (i, buy, cooldown, profit) => {
      if (i == prices.length) return profit;
      let maxP = 0
      if (buy >= 0) {
          if (prices[i] > buy) {
              maxP = Math.max(dfs(i + 1, -1, 1, profit + prices[i] - buy), 
                              dfs(i + 1, buy, 0, profit))
          } else maxP = dfs(i + 1, buy, 0, profit)
      } else if (cooldown) {
          maxP = dfs(i + 1, -1, 0, profit);
      } else {
          maxP = Math.max(dfs(i + 1, prices[i], 0, profit), 
                          dfs(i + 1, -1, 0, profit))
      }
      return maxP;
  }
  
  return dfs(0, -1, 0, 0);
};

// Time Limit Exceeded.  208/210 test cases passed.
var maxProfit = function(prices) {
  const dict = {};
  const dfs = (i, buying) => {
      if (i >= prices.length) return 0;
      let maxP = 0;
      const cooldown = dfs(i + 1, buying);
      if (buying) {
          const buy = dfs(i + 1, !buying) - prices[i];
          maxP = Math.max(buy, cooldown);
      } else {
          const sell = dfs(i + 2, !buying) + prices[i];
          maxP = Math.max(sell, cooldown);
      }
      return maxP;
  }
  
  return dfs(0, true);
};

// Passed.
var maxProfit = function(prices) {
  const dict = {};

  const dfs = (i, bought) => {
      if (i >= prices.length) return 0;
      if (dict[i + ',' + bought]) return dict[i + ',' + bought]
      const cooldown = dfs(i + 1, bought);
      if (bought) {
          // Add 2 because you have to pass one day to buy a stock after you sell.
          const sell = dfs(i + 2, 0) + prices[i];
          dict[i + ',' + bought] = Math.max(sell, cooldown);
      } else {
          const buy = dfs(i + 1, 1) - prices[i];
          dict[i + ',' + bought] = Math.max(buy, cooldown);
      }
      return dict[i + ',' + bought];
  }
  
  return dfs(0, 0);
};
