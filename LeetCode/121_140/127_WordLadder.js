/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// Runtime Error because of heap out of memory. 25/50 test cases passed.
 var ladderLength = function(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;
  let paths = [[beginWord]];
  while (paths.length > 0) {
      const temp = paths;
      paths = [];
      for (let path of temp) {
          for (let word of wordList) {
              if (path.includes(word)) continue;
              if (!isValidNext(path.at(-1), word)) continue;
              if (word == endWord) return path.length + 1;
              paths.push([...path, word]);
          }
      }
  }
  return 0;
};

function isValidNext(from, to) {
  let diff = 0;
  for (let i = 0; i < to.length; i++) if (from[i] != to[i]) diff++;
  return diff == 1;
}

// Time Limit Exceeded. 23/50 test cases passed.
var ladderLength = function(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;
  let minPath = null;
  
  const findPath = (from, count, set) => {
      if (from == endWord) return count;
      for (let word of wordList) {
          if (set.has(word)) continue;
          if (!isValidNext(from, word)) continue;
          set.add(word);
          const pathCount = findPath(word, count+1, set);
          set.delete(word);
          minPath = !minPath ? pathCount : Math.min(minPath, pathCount);
      }
      return minPath
  }
  
  const set = new Set();
  set.add(beginWord)
  return findPath(beginWord, 1, set);
};