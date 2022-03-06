var TrieNode = function() {
  this.children = {};
  this.endOfWord = false;
}
var WordDictionary = function() {
  this.root = new TrieNode();
};

/** 
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
  let curr = this.root;
  for (let c of word) {
      if (!curr.children[c]) curr.children[c] = new TrieNode();
      curr = curr.children[c];
  }
  curr.endOfWord = true;
};

/** 
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function(word) {
  const dfs = (i, curr) => {
      if (i >= word.length) return curr.endOfWord;
      const w = word[i];
      if (w == '.') {
          for (let c in curr.children) {
              if (dfs(i + 1, curr.children[c])) return true;
          }
          return false;
      } else {
          if (curr.children[w]) {
              return dfs(i + 1, curr.children[w])
          } else return false;
      }
  }
  return dfs(0, this.root);
};

/** 
* Your WordDictionary object will be instantiated and called as such:
* var obj = new WordDictionary()
* obj.addWord(word)
* var param_2 = obj.search(word)
*/