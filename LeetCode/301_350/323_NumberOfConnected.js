var numberOfConnected = (n, edges) => {
  // Optional
  // edges = edges.map(arr => arr.sort((x,y) => x - y))
  // edges.sort((a, b) => a[0] - b[0]);

  let output = [];
  for (let edge of edges) output.push(new Set(edge));

  const mergeSets = (set1, set2) => {
    for (let x of set2) {
      if (set1.has(x)) {
        for (let x of set2) set1.add(x);
        return true;
      }
    }
    return false;
  }

  let merged = true, count = 0;
  while (count < output.length) {
    merged = false;
    const temp = output;
    output = [];
    const set = temp[0];
    for (let i = 1; i < temp.length; i++) {
      if (i == count) continue;
      const tSet = temp[i];
      const res = mergeSets(set, tSet)
      if (!res) output.push(tSet)
      else merged = res;
    }
    output.push(set);
    if (!merged) count++;
  }

  for (let i = 1; i < n; i++) {
    let set = output.find(s => s.has(i))
    if (!set) output.push(new Set([i]));
  }
  console.log(output)
  return output.length;
}

function numberOfConnected1(n, edges) {
  const par = [], rank = new Array(n).fill(1);
  for (let i = 0; i < n; i++) par.push(i)

  const find = (x) => {
    while (x != par[x]) {
      par[x] = par[par[x]];
      x = par[x]
    }
    return x
  }

  const union = (n1, n2) => {
    const p1 = find(n1), p2 = find(n2);
    if (p1 == p2) return 0;
    if (rank[p2] > rank[p1]) {
      par[p1] = p2;
      rank[p2] += rank[p1];
    } else {
      par[p2] = p1;
      rank[p1] += rank[p2]
    }
    return 1;
  }

  let res = n;
  for (let [n1, n2] of edges) {
    res -= union(n1, n2);
  }

  return res;
}

let edges = [[0,1], [1,2], [4,3], [5,4], [0,5], [3, 0]]
console.log(numberOfConnected(6, edges))
