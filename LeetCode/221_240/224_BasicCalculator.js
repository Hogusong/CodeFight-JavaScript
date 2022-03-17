/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let prefix = 1, sum = 0;
  const stack = [];
  
  for (let i = 0; i < s.length; i++) {
      if (s[i] === ' ') continue;
      if ('1234567890'.includes(s[i])) {
          let n = '';
          while (i < s.length && '1234567890'.includes(s[i])) {
              n += s[i++];
          }
          sum += prefix * n;
          i--
      } else if (s[i] === '+') prefix = 1;
      else if (s[i] === '-') prefix = -1;
      else if (s[i] === '(') {
          stack.push(sum);
          stack.push(prefix);
          sum = 0;
          prefix = 1;
      } else {
          sum = stack.pop() * sum;
          sum += stack.pop();
      }
  }
  return sum;
}

var calculate = function(s) {
    let prefix = 1, sum = 0;
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') continue;
        if ('1234567890'.includes(s[i])) {
            let n = '';
            while (i < s.length && '1234567890'.includes(s[i])) {
                n += s[i++];
            }
            i--
            stack.push(prefix * n);
        } else if (s[i] === '+') prefix = 1;
        else if (s[i] === '-') prefix = -1;
        else if (s[i] === '(') {
            stack.push(prefix + s[i]);
            prefix = 1;
        } else {
            sum = 0;
            let num;
            while (stack.length > 0) {
                num = stack.pop();
                if (typeof num === 'string') break;
                sum += num;
            }
            if (num[0] == '-') sum = 0 - sum
            stack.push(sum);
        }
    }
    sum = 0
    while (stack.length > 0) sum += stack.pop();
    return sum;
}