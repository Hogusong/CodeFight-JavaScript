/**
* @param {string} preorder
* @return {boolean}
*/
var isValidSerialization = function(preorder) {
  const stack = [];
  for (let n of preorder.split(',')) {
      stack.push(n);
      while (stack.length > 2) {
          if (stack.at(-1) != '#' || stack.at(-2) != '#' || stack.at(-3) == '#') break
          stack.pop();
          stack.pop();
          stack.pop();
          stack.push('#');
      }
  }
  
  return stack.length == 1 && stack[0] == '#';
};