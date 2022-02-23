/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  if (n <= 2) return n;
  return countTrees(1, n);
}

function countTrees(s, e) {
  if (s >= e) return 1;
  let count = 0;
  for (let i = s; i <= e; i++) {
      const leftNodes = countTrees(s, i-1);
      const rightNodes = countTrees(i+1, e);
      count += leftNodes * rightNodes
  }
  return count;
}

// Using Dictionary for Dynamic Programming.
var numTrees = function(n) {
  if (n <= 2) return n;
  dict = {}
  
  const countTrees = (s, e) => {
      if (s >= e) return 1;
      if (dict[s + ':' + e]) return dict[s + ':' + e];
      let count = 0;
      for (let i = s; i <= e; i++) {
          const leftNodes = countTrees(s, i-1);
          const rightNodes = countTrees(i+1, e);
          count += leftNodes * rightNodes
      }
      dict[s + ':' + e] = count;
      return dict[s + ':' + e];
  }

  return countTrees(1, n);
}

var numTrees = function(n) {
  dict = {0:1};
  const createTrees = (n) => {
    if (n < 3) return n
    let total = 0
    for (let i = 1; i <= n; i++) {
        if (!dict[i - 1]) dict[i - 1] = createTrees(i - 1)
        if (!dict[n - i]) dict[n - i] = createTrees(n - i)
        total += dict[i - 1] * dict[n - i]
    }
    return total
  }

  return createTrees(n);
}

var numTrees = function(n) {
  dict = {0: 1, 1: 1}
  
  const countTrees = (n) => {
      if (dict[n]) return dict[n];
      let count = 0;
      for (let i = 1; i <= n; i++) {
          count += countTrees(i-1) * countTrees(n-i);
      }
      dict[n] = count;
      return count;
  }

  return countTrees(n);
}