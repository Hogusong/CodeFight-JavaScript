/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
  const nums = new Array(n);
  const indices = new Array(primes.length).fill(0);
  nums[0] = 1;

  for (let i = 1; i < n; i++) {
      nums[i] = Number.MAX_VALUE;
      for (let j = 0; j < primes.length; j++) {
          nums[i] = Math.min(nums[i], primes[j] * nums[indices[j]])
      }

      for (let j = 0; j < primes.length; j++) {
          if (nums[i] == nums[indices[j]] * primes[j]) indices[j]++;
      }
  }
  return nums[n-1];
};