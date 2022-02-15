/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let len = prices.length;
  let left = [0], right = new Array(len);
  right[len-1] = 0;
  let price = prices[0];
  for (let i = 1; i < len; i++) {
      left[i] = Math.max(left[i-1], prices[i] - price);
      if (price > prices[i]) price = prices[i];
  }

  let sellPrice = prices[len-1];
  for (let i = len - 2; i >= 0; i--) {
      right[i] = Math.max(right[i+1], sellPrice - prices[i]);
      if (sellPrice < prices[i]) sellPrice = prices[i];
  }

  let maxP = right[0];
  console.log(left)
  console.log(right)
  for (let i = 1; i < len; i++) {
      maxP = Math.max(maxP, left[i-1] + right[i]);
  }
  return maxP;
}

const prices = [3,5,6,1,2,2,4,5,2,9]
console.log(maxProfit(prices))

// prices = [3, 5, 6, 1, 2, 2, 4, 5, 2, 9]
// left   = [0, 2, 3, 3, 3, 3, 3, 4, 4, 8]
// right  = [8, 8, 8, 8, 7, 7, 7, 7, 7, 0]
// max profit is 3 + 8 = 11.
