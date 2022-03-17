var alienOrder = (words) => {
  let adj = {};
  for (let word of words) {
    for (let c of word) {
      adj[c] = new Set();
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i], w2 = words[i + 1];
    const minLen = Math.min(w1.length, w2.length);
    if (w1.length > w2.length && w1.substring(0, minLen) === w2) 
      return '';
    for (let j = 0; j < minLen; j++) {
      if (w1[j] === w2[j]) continue;
      adj[w1[j]].add(w2[j]);
      break;
    }
  }

  const visit = {};
  const res = [];

  const dfs = (c) => {
    if (visit.hasOwnProperty(c)) return visit[c];
    visit[c] = true;
    for (let nei of adj[c]) {
      if (dfs(nei)) return true;
    }
    visit[c] = false;
    res.push(c);
  }

  for (let c in adj) {
    if (dfs(c)) return ''
  }

  const c = res.pop();
  res.reverse();
  return [c, ...res].join('');
}

function alienOrder(words) {
  const dict = []

  const buildDict = (w1, w2) => {
    for (let i = 0; i < w1.length && i < w2.length; i++) {
      if (w1[i] != w2[i]) {
        dict.push(w1[i] + w2[i])
        break
      }
    }
  }
  
  for (let i = 1; i < words.length; i++ ) {
    const w1 = words[i-1], w2 = words[i];
    if (w1.length > w2.length && w1.substring(0, w2.length) == w2) return '';
    buildDict(w1, w2);
  }

  let count = 0;
  while (count < dict.length) {
    let w = dict.shift();
    let i = dict.findIndex(s => s[0] == w.at(-1))
    while (i >= 0) {
      w += dict[i].substring(1);
      dict.splice(i, 1);
      count = 0
      i = dict.findIndex(s => s[0] == w.at(-1))
    }
    i = dict.findIndex(s => s.at(-1) == w[0])
    while (i >= 0) {
      w = dict[i] + w.substring(1);
      dict.splice(i, 1);
      count = 0
      i = dict.findIndex(s => s.at(-1) == w[0])
    }
    if (w.length == 2) {
      for (let word of dict) {
        i = word.indexOf(w[0]);
        if (i >= 0 && i < word.indexOf(w[1])) {
          w = '';
          break;
        }
      }
    }
    if (w.length > 0) dict.push(w);
    count++;
  }
  return dict[0];
}

words = ['wrt', 'wrf', 'er', 'ett', 'rftt']

console.log(alienDict(words))
