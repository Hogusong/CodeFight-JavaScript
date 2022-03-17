/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  return n % 4 > 0;
};

// The first player can win when n = 1,2,3,5,6,7,9,10,11, ...
// The first player will loose whtn n = 4,8,12,16, ...