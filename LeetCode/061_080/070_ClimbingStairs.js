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
