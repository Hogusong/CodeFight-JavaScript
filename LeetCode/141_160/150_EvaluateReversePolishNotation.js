/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
  const stack = [];
  for (let t of tokens) {
      if ('+-/*'.includes(t)) {
          const x = stack.pop();
          let y = stack.pop();
          if (t == '+') y += x;
          if (t == '-') y -= x;
          if (t == '*') y *= x;
          if (t == '/') {
              if (x * y < 0) y = Math.ceil(y / x);
              else y = Math.floor(y / x);
          }
          stack.push(y);
      } else stack.push(+t);
  }
  return stack.pop();
}
