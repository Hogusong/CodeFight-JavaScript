var isValidTree = (edges, k) => {
  const dict = {};
  for (let [x, y] of edges) {
    if (!dict[x]) dict[x] = [y];
    else dict[x].push(y);
  }
  const visit = new Set();
  
  const dfs = (n, prev) => {
    if (visit.has(n)) return false;
    visit.add(n);
    if (!dict[n]) return true;
    for (let x of dict[n]) {
      if (x == prev) continue;
      if (!dfs(x, n)) return false;
    }
    return true;
  }

  if (!dfs(0,-1)) return false;
  return visit.size == k;
}

let edges = [[0,1], [0,2], [0,3], [1,4]]
console.log(isValidTree(edges, 5))