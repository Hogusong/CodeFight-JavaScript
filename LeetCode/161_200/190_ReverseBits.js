/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
  let str = ''
  while (n > 0) {
      const x = n % 2;
      n = Math.floor(n / 2);
      str = x + str;
  }
  str = '0'.repeat(32 - str.length) + str;
  n = 0;
  for (let i = str.length-1; i >= 0; i--) {
      if (str[i] == '0' && n == 0) continue;
      n = n * 2 + +str[i];
  }
  return n;
};