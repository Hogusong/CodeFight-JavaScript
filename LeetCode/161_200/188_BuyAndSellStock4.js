/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */

//  Using Recurision and Time Limit Exceeded. 209/211 test cases passed.
var maxProfit = function(k, prices) {
  const len = prices.length;
  if (len < 2 || k < 1) return 0;
  
  let maxP = 0;
  if (k >= len / 2) {
      for (let i = 1; i < len; i++) {
          if (prices[i] > prices[i-1]) maxP += prices[i] - prices[i-1];
      }
      return maxP;
  }
  
  const buyAndSell = (i, buy, count, profit) => {
      if (count == k || i >= len) {
          maxP = Math.max(maxP, profit);
          return;
      }
      if (buy < 0) {
          buyAndSell(i+1, prices[i], count, profit);
      } else if (buy < prices[i]) {
          buyAndSell(i+1, -1, count + 1, profit + prices[i] - buy);
      }
      buyAndSell(i+1, buy, count, profit);
  }
  
  buyAndSell(0, -1, 0, 0);
  return maxP;
};

//  Using Recurision and Time Limit Exceeded. 209/211 test cases passed.
var maxProfit = function(k, prices) {
  const len = prices.length;
  if (len < 2 || k < 1) return 0;

  // Make an array with Valley & Peak of prices.
  let arr = [];
  if (prices[0] < prices[1]) arr.push(prices[0]);
  for (let i = 1; i < len-1; i++) {
      if (prices[i-1] >= prices[i] && prices[i] < prices[i+1]) arr.push(prices[i]);
      else if (prices[i-1] < prices[i] && prices[i] >= prices[i+1]) arr.push(prices[i])
  }
  if (prices.at(-1) > arr.at(-1)) arr.push(prices.at(-1));

  const buyAndSell = (i, buy, c) => {
      if (c == k || i >= arr.length) {
          return 0;
      }
      if (buy < 0) {
          return Math.max(buyAndSell(i+1, arr[i], c), buyAndSell(i+1, buy, c)) ;
      } else if (buy < arr[i]) {
          const profit = arr[i] - buy
          return Math.max(profit + buyAndSell(i+1, -1, c + 1), buyAndSell(i+1, buy, c));
      } else return buyAndSell(i+1, buy, c)
  }
  
  return buyAndSell(0, -1, 0);
};

//  Using Recurision and Time Limit Exceeded. 209/211 test cases passed.
var maxProfit = function(k, prices) {
  const len = prices.length;
  if (len < 2 || k < 1) return 0;
  
  const buyAndSell = (i, buy, c) => {
      if (c == k || i >= len) {
          return 0;
      }
      if (buy < 0) {
          return Math.max(prices[i] + buyAndSell(i+1, 1, c+1), buyAndSell(i+1, buy, c)) ;
      } else {
          return Math.max(-prices[i] + buyAndSell(i+1, -1, c), buyAndSell(i+1, buy, c));
      }
  }
  
  return buyAndSell(0, -1, 0);
};

// Using Recursion and Dictionary. All test cases passed.
var maxProfit = function(k, prices) {
  const len = prices.length;
  if (len < 2 || k < 1) return 0;

  dict = {}
  const buyAndSell = (i, buy, c) => {
      if (c == k || i >= len) {
          return 0;
      }
      const key = i + ',' + buy + ',' + c;
      if (dict[key]) return dict[key];
      if (buy == 0) {
          dict[key] = Math.max(-prices[i] + buyAndSell(i+1, 1, c), buyAndSell(i+1, buy, c)) ;
      } else {
          dict[key] = Math.max(prices[i] + buyAndSell(i+1, 0, c+1), buyAndSell(i+1, buy, c));
      }
      return dict[key];
  }
  
  return buyAndSell(0, 0, 0);
};

// Using Recursion and Dictionary. All test cases are passed and this is paster than above.
var maxProfit = function(k, prices) {
  const len = prices.length;
  if (len < 2 || k < 1) return 0;

  // Make an array with Valley & Peak of prices.
  let arr = [];
  if (prices[0] < prices[1]) arr.push(prices[0]);
  for (let i = 1; i < len-1; i++) {
      if (prices[i-1] >= prices[i] && prices[i] < prices[i+1]) arr.push(prices[i]);
      else if (prices[i-1] < prices[i] && prices[i] >= prices[i+1]) arr.push(prices[i])
  }
  if (prices.at(-1) > arr.at(-1)) arr.push(prices.at(-1));

  dict = {}
  const buyAndSell = (i, buy, c) => {
      if (c == k || i >= arr.length) {
          return 0;
      }
      const key = i + ',' + buy + ',' + c;
      if (dict[key]) return dict[key];
      if (buy == 0) {
          dict[key] = Math.max(-arr[i] + buyAndSell(i+1, 1, c), buyAndSell(i+1, buy, c)) ;
      } else {
          dict[key] = Math.max(arr[i] + buyAndSell(i+1, 0, c+1), buyAndSell(i+1, buy, c));
      }
      return dict[key];
  }

  return buyAndSell(0, 0, 0);
};

var maxProfit = function(k, prices) {
  const len = prices.length;
  if (len < 2 || k < 1) return 0;
  
  let profit = 0;
  if (k >= len / 2) {
      for (let i = 1; i < len; i++) {
          if (prices[i] > prices[i-1]) profit += prices[i] - prices[i-1];
      }
      return profit;
  }
  
  const buy = new Array(k).fill(-Number.MAX_VALUE), sell = new Array(k).fill(0);
  for (let i = 0; i < len; i++) {
      for (let j = 0; j < k; j++) {
          buy[j] = Math.max(buy[j], j == 0 ? -prices[i] : sell[j-1] - prices[i]);
          sell[j] = Math.max(sell[j], buy[j] + prices[i])
      }
  }
  return sell[k-1];
};