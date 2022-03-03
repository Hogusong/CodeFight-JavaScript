/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let paid = null, profit = 0;
    for (let i = 0; i < prices.length-1; i++) {
        if (prices[i] < prices[i+1]) profit += prices[i+1] - prices[i];
    }
    if (paid != null && paid < prices.at(-1)) profit += prices.at(-1) - paid;
    return profit;
};

// Buy when it is a valley and sale when it is a peak.
var maxProfit = function(prices) {
  let paid = prices[0], profit = 0;
  for (let i = 1; i < prices.length-1; i++) {
      if (prices[i-1] >= prices[i] && prices[i] < prices[i+1])
          paid = prices[i];
      else if (prices[i-1] < prices[i] && prices[i] >= prices[i+1]) {
          if (paid != null) {
              profit += prices[i] - paid;
              paid = null;
          }
      }
  }
  if (paid != null && paid < prices.at(-1)) profit += prices.at(-1) - paid;
  return profit;
};

var maxProfit = function(prices) {
    let paid = null, profit = 0;
    for (let i = 0; i < prices.length-1; i++) {
        if ((i == 0 || prices[i-1] >= prices[i]) && prices[i] < prices[i+1])
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