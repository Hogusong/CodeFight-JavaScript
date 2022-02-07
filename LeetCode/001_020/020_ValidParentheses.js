/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(str) {
  const stack = [];
  for (let c of str) {
      if ('({['.includes(c)) stack.push(c);
      else {
          if (stack.length < 1) return false;
          const w = stack.pop();
          if (c == ')' && w != '(') return false;
          if (c == '}' && w != '{') return false;
          if (c == ']' && w != '[') return false;
      }
  }
  return stack.length == 0;
};