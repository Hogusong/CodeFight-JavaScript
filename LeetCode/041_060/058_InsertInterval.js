/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
  intervals = intervals.sort((a,b) => a[0] - b[0]);
  let [x, y] = newInterval;
  const newIntervals = [];
  for (let i = 0; i < intervals.length; i++) {
      const [a,b] = intervals[i];
      if (b < x) newIntervals.push(intervals[i]);
      else if (y < a) {
          return [...newIntervals, [x,y], ...intervals.slice(i)];
      } else {
          x = Math.min(x, a);
          y = Math.max(y, b);
      }
  }
  newIntervals.push([x,y]);
  return newIntervals;
}

var insert2 = function(intervals, newInterval) {
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