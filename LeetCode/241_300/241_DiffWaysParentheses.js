/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
  const operators = new Set('+-*/');
  const expArray = [];
  let str = ''
  for (let c of expression) {
      if ('+-*'.includes(c)) {
          expArray.push(+str);
          expArray.push(c);
          str = ''
      } else str += c;
  }
  expArray.push(+str);

  const dfs = (s, e) => {
      const res = [];
      for (let i = s; i < e; i++) {
          if (operators.has(expArray[i])) {
              const leftList = dfs(s, i - 1);
              const rightList = dfs(i+1, e);
              for (let n1 of leftList) {
                  for (let n2 of rightList) {
                      res.push(calculate(n1, n2, expArray[i]))
                  }
              }
          }
      }
      if (res.length < 1) {
          expArray.slice(s, e + 1).forEach(n => res.push(n))
      }

      return res;
  }
  
  return dfs(0, expArray.length - 1);
};

function calculate(x, y, op) {
  console.log([x, y, op])
  if (op == '-') return x - y;
  if (op == '+') return x + y;
  return x * y;
}