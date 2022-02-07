/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
  let prefix = 1;
  if (dividend < 0) prefix *= -1;
  if (divisor < 0) prefix *= -1;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  let result = 0, n = 1, subtractor = divisor;
  while (dividend >= divisor) {
      if (dividend >= subtractor) {
          dividend -= subtractor;
          result += n;
          subtractor += subtractor;
          n += n;
      } else {
          subtractor = divisor;
          n = 1;
      }
  }
  if (prefix * result > 2147483647) return 2147483647;
  if (prefix * result < -2147483648) return -2147483648
  return result * prefix;
}