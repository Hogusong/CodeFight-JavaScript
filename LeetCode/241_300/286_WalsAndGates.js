var wallsAndGates = (rooms) => {
  const m = rooms.length; n = rooms[0].length;
  const visit = new Set();
  let dist = 0, q = [];

  const addRoom = (r, c) => {
    if (r < 0 || c < 0 || r >= m || c >= n) return 
    if (visit.has(r + ',' + c) || rooms[r][c] < 0) return
    q.push([r, c]);
    visit.add(r + ',' + c);
  }

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (rooms[r][c] == 0) {
        q.push([r, c]);
        visit.add(r + ',' + c);
      }
    }
  }

  while (q.length > 0) {
    const temp = q;
    q = [];
    for (let [r,c] of temp) {
      rooms[r][c] = dist;
      addRoom(r+1, c);
      addRoom(r-1, c);
      addRoom(r, c+1);
      addRoom(r, c-1);
    }
    dist++;
  }
  console.log(rooms);
}