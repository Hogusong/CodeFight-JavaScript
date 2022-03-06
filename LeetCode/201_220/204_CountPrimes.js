/**
 * @param {number} n
 * @return {number}
 */

// Time Limit Exceeded.  17/66 test cases passed.
var countPrimes = function(n) {
  if (n < 3) return 0;
  const primes = [2];
  let x = 3;
  while (x < n) {
      let isPrime = true;
      for (let p of primes) {
          if (x % p == 0) {
              isPrime = false;
              break;
          }
      }
      if (isPrime) primes.push(x)
      x++;
  }
  return primes.length;
};

// Time Limit Exceeded.  53/66 test cases passed.
var countPrimes = function(n) {
  if (n < 3) return 0;
  const primes = [2];
  let x = 3;
  while (x < n) {
      let isPrime = true;
      for (let p of primes) {
          if (p > Math.sqrt(x)) break;
          if (x % p == 0) {
              isPrime = false;
              break;
          }
      }
      if (isPrime) primes.push(x)
      x++;
  }
  return primes.length;
};

// Passed.
var countPrimes = function(n) {
  if (n < 3) return 0;
  const primes = new Array(n).fill(true);
  primes[0] = false;
  primes[1] = false;
  for (let i = 2; i * i < n; i++) {
    if (!primes[i]) continue;
    for (let j = i * i; j < n; j += i) {
      primes[j] = false;
    }
  }

  let count = 0;
  for (let primes of primes) if (primes) count++;
  return count;
}