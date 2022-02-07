/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
  if (n == 0) return 1;
  const dict = {};
  const getPow = (z, n) => {
      if (n == 1) return z;
      const m = Math.floor(n / 2);
      if (!dict[m]) dict[m] = getPow(z, m);
      if (n % 2 == 0) return dict[m] * dict[m];
      return z * dict[m] * dict[m];
  }
  
  if (n < 0) return getPow(1/x, -n)
  return getPow(x, n);
}