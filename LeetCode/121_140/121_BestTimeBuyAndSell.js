/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let paid = prices[0], maxP = 0;
  for (let i = 1; i < prices.length; i++) {
      if (prices[i] <= paid) paid = prices[i] 
      else if (maxP < prices[i] - paid) maxP = prices[i] - paid;
  }
  return maxP;
}
