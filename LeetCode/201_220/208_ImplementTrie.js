var TrieNode = function() {
  this.children = {};
  this.endOfWord = false;
}

var Trie = function() {
  this.root = new TrieNode();
};

/** 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  let curr = this.root;
  for (let c of word) {
      if (!curr.children[c]) {
          curr.children[c] = new TrieNode();
      } 
      curr = curr.children[c];
  }
  curr.endOfWord = true;
};

/** 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  let curr = this.root;
  for (let c of word) {
      if (!curr.children[c]) return false
      curr = curr.children[c];
  }
  return curr.endOfWord;
};

/** 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  let curr = this.root;
  for (let c of prefix) {
      if (!curr.children[c]) return false;
      curr = curr.children[c];
  }
  return true;
};

/** 
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/