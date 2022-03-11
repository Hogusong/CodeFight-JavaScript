/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  intervals = intervals.sort((a,b) => a[0] - b[0]);
  const newIntervals = [];
  let x = intervals[0][0], y = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
      const [a, b] = intervals[i];
      if (y < a) {
          newIntervals.push([x, y]);
          [x,y] = [a,b];
      } else y = Math.max(y, b);
  }
  newIntervals.push([x, y]);
  return newIntervals
}
