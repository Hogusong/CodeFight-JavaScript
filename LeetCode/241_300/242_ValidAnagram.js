/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  
  let res = 0, prevEnd = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
      const [s, e] = intervals[i];
      if (s >= prevEnd) prevEnd = e;
      else {
          res++;
          prevEnd = Math.min(prevEnd, e);
      }
  }
  return res;
};