/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
 var getPermutation = function(n, k) {
  let arr = [];
  for (let i = 0; i < n; i++) arr[i] = i + 1;
  let ans = "";
  for (let i = 1; i <= n; i++) {
      if (k <= 1) {
          ans += arr.join('');
          break;
      }
      const divisor = factorial(n-i);
      let index = Math.floor(k / divisor);
      if (k % divisor == 0) index--;
      ans += arr[index];
      arr.splice(index, 1);
      k = k - divisor * index;
  } 
  return ans;
}

function factorial(n) {
  if (n < 3) return n;
  return n * factorial(n - 1);
}