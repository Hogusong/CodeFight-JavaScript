
var MyQueue = function() {
  this.queue = [];
  this.point = 0;
};

/** 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  if (this.point > this.queue.length / 2) {
      this.queue = this.queue.splice(this.point);
      this.point = 0;
  }
  this.queue.push(x);
};

/**
* @return {number}
*/
MyQueue.prototype.pop = function() {
  this.point++;
  return this.queue[this.point-1];
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function() {
  return this.queue[this.point];
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.queue.length - this.point < 1;
};

/** 
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/