var minMeetingRooms = (intervals) => {
  const start = intervals.map(int => int[0]);
  const end = intervals.map(int => int[1]);
  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);

  let res = 0, count = 0, s = 0, e = 0;
  while (s < intervals.length) {
    if (start[s] < end[e]) {
      s++;
      count++;
    } else {
      e++;
      count--;
    }
    res = Math.max(res, count)
  }
  return res;
}