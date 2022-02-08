var insert = function(intervals, newInterval) {
  const len = intervals.length
  if (len < 1) return [newInterval]
  let [x, y] = newInterval
  let newIntervals = []
  for (let i = 0; i < len; i++) {
      const [s, e] = intervals[i]
      if (s <= x && y <= e) return [...newIntervals, ...intervals.slice(i)]
      if ((s <= x && x <= e) || (s <= y && y <= e)) {
          x = s > x ? x : s
          y = e > y ? e : y
      } else if (x > e) newIntervals.push([s, e])
      else if (y < s) return [...newIntervals, [x, y], ...intervals.slice(i)] 
  }
  newIntervals.push([x, y])
  return newIntervals
};

var lengthOfLastWord = function(s) {
  let i = s.length - 1
  while (s[i] === ' ') i--
  const end = i
  while (i >= 0 && s[i] != ' ') i--
  return end - i
};