/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
  const dict = {}
  const climb = (i) => {
      if (i > n) return 0
      if (i === n) return 1
      if (!dict[i + 1]) dict[i + 1] = climb(i + 1)
      if (!dict[i + 2]) dict[i + 2] = climb(i + 2)
      return dict[i + 1] + dict[i + 2]
  }
  return climb(0)
}

var climbStairs = function(n) {
  const ans = [1, 2];
  for (let i = 2; i < n; i++) {
      ans[i] = ans[i-1] + ans[i-2]
  }
  return ans[n-1];
}

var climbStairs = function(n) {
  if (n == 1) return 1;
  let one = 1, two = 2;
  for (let i = 3; i <= n; i++) {
      const temp = one;
      one = two;
      two = temp + one;
  }
  return two;
}