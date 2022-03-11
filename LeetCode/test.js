var isValidTree = (edges, k) => {
  const dict = {};
  for (let [x, y] of edges) {
    if (!dict[x]) dict[x] = [y];
    else dict[x].push(y);
  }
  console.log(dict);

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

let edges = [[0,1], [1,2], [4,3], [5,4], [0,5], [1,5], [3, 0]]
// console.log(isValidTree(edges, 5))

var numberOfConnected = (n, edges) => {
  let output = [];
  for (let edge of edges) output.push(new Set(edge));
  // for (let [x, y] of edges) {
  //   let set = output.find(s => s.has(x))
  //   if (set) set.add(y)
  //   else {
  //     set = output.find(s => s.has(y))
  //     if (set) set.add(x)
  //     else {
  //       const temp = new Set();
  //       temp.add(x);
  //       temp.add(y);
  //       output.push(temp);
  //     }
  //   }
  // }

  const mergeSets = (set1, set2) => {
    for (let x of set2) {
      if (set1.has(x)) {
        for (let x of set2) set1.add(x);
        return true;
      }
    }
    return false;
  }

  console.log(output)
  let merged = true;
  while (merged && output.length > 1) {
    merged = false;
    const temp = output;
    output = [];
    const set = temp[0];
    while (temp.length > 1) {
      const tSet = temp.pop();
      const res = mergeSets(set, tSet)
      if (!res) output.push(tSet)
      else merged = res;
    }
    output.push(set);
  }

  for (let i = 1; i < n; i++) {
    let set = output.find(s => s.has(i))
    if (!set) output.push(new Set([i]));
  }
  console.log(output)
  return output.length;
}

console.log(numberOfConnected(6, edges))

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

console.log('a'.charCodeAt())
console.log('z'.charCodeAt())
console.log('0'.charCodeAt())
console.log('9'.charCodeAt())
console.log('A'.charCodeAt())
console.log('Z'.charCodeAt())