/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
  const arr = path.split('/');
  const stack = [];
  for (let w of arr) {
      if (w == '' || w == '.') continue;
      if (w == "..") stack.pop();
      else stack.push(w);
  }
  return '/' + stack.join('/');
};