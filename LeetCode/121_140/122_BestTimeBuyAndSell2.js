/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let paid = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length-1; i++) {
      if (prices[i-1] >= prices[i] && prices[i] < prices[i+1])
          paid = prices[i];
      else if (i > 0 && prices[i-1] < prices[i] && prices[i] >= prices[i+1]) {
          if (paid != null) {
              profit += prices[i] - paid;
              paid = null;
          }
      }
  }
  if (paid != null && paid < prices.at(-1)) profit += prices.at(-1) - paid;
  return profit;
};