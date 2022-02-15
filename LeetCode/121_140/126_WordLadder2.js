/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
// Time Limit Exceeded: 19/32 test cases passed.
var findLadders = function(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return [];
  const dict = {};
  buildDict(beginWord, wordList, dict);
  let result = [], minLen = wordList.length;
  const travel = (s, e, ans) => {
      if (dict[s].includes(e)) {
          if (ans.length < minLen) {
              result = [];
              minLen = ans.length;
          }
          if (ans.length == minLen) result.push([...ans, e]);
          return;
      }
      for (let w of dict[s]) {
          if (ans.includes(w)) continue;
          travel(w, e, [...ans, w]);
      }
  }
  
  travel(beginWord, endWord, [beginWord]);
  return result;
};

function buildDict(key, list, dict) {
  if (dict[key]) return;
  dict[key] = [];
  for (let word of list) {
      if (key == word) continue;
      let diff = 0;
      for (let i = 0; i < word.length; i++) {
          if (word[i] != key[i]) diff++;
          if (diff > 1) break;
      }
      if (diff < 2) dict[key].push(word)
  }
}

// Using Array : Runtime Error because of memory allocation failure. 21/32 test cases passed.
var findLadders = function(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return [];
  let result = [], minLen = wordList.length;
  let paths = [[beginWord]];
  while (paths.length > 0) {
      const temp = paths;
      paths = [];
      for (let path of temp) {
          const nextWords = findNextWords(path, wordList);
          if (nextWords.includes(endWord)) {
              if (result.length < 1) result.push([...path, endWord]);
              else if (result[0].length == path.length + 1) result.push([...path, endWord]);
          }
          if (result.length > 0) continue
          for (let w of nextWords) {
              paths.push([...path, w]);
          }
      }
      if (result.length > 0) break;
  }
  
  return result;
};

function findNextWords (path, wList) {
  const from = path.at(-1);
  const ans = [];
  for (let word of wList) {
      if (path.includes(word)) continue;
      if (isValidNextWord(from, word)) ans.push(word);
  }
  return ans;
}

function isValidNextWord(from, to) {
  let diff = 0;
  for (let i = 0; i < to.length; i++) if (from[i] != to[i]) diff++;
  return diff == 1
}