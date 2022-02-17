/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
  this.size = capacity;
  this.cache = [];
  this.usedKeys = [];
};

/** 
* @param {number} key
* @return {number}
*/

// ---------------- Time Limit Exceeded. 18/22 test cases passed.
LRUCache.prototype.get = function(key) {
  console.log(this.cache)
  let index = this.cache.findIndex(arr => arr[0] == key);
  if (index >= 0) {
      const i = this.usedKeys.indexOf(key);
      if (i >= 0) this.usedKeys.splice(i, 1)
      this.usedKeys.push(key)
      
      return this.cache[index][1];
  }
  else return -1
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  let index = this.cache.findIndex(arr => arr[0] == key);
  if (index >= 0) {
      this.cache[index][1] = value;
      index = this.usedKeys.indexOf(key);
      if (index >= 0) this.usedKeys.splice(index, 1)
  } else {
      if (this.cache.length >= this.size) {
          console.log(this.usedKeys)
          while (index < 0) {
              const usedKey = this.usedKeys.shift();
              index = this.cache.findIndex(arr => arr[0] == usedKey);
          }
          this.cache.splice(index, 1);
      }
      this.cache.push([key, value]);
  } 
  this.usedKeys.push(key)
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/

// ---------------- Time Limit Exceeded. 20/22 test cases passed.
/**
 * @param {number} capacity
 */
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.cache = {};
  this.usedKeys = [];
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if (!this.cache.hasOwnProperty(key)) return -1;

  const i = this.usedKeys.indexOf(key);
  if (i >= 0) this.usedKeys.splice(i, 1)
  this.usedKeys.push(key)
  return this.cache[key];
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  let index = this.usedKeys.indexOf(key);
  if (index >= 0) this.usedKeys.splice(index, 1);
  this.usedKeys.push(key);
  if (!this.cache.hasOwnProperty(key) && this.capacity == Object.keys(this.cache).length) {
      const usedKey = this.usedKeys.shift();
      delete this.cache[usedKey];
  }
  this.cache[key] = value;
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/