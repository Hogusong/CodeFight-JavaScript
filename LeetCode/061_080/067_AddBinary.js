/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
  if (a.length < b.length) [a, b] = [b, a];
  let ans = "", up = 0, aEnd = a.length - 1, bEnd = b.length - 1;
  for (let i = 0; i <= aEnd; i++) {
      const n = +a[aEnd - i] + up + (i <= bEnd ? +b[bEnd - i] : 0);
      ans = (n % 2) + ans;
      up = n > 1 ? 1 : 0;
  }
  if (up > 0) ans = up + ans;
  return ans;
}