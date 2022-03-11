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