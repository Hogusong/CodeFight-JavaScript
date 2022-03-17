/**
 * @param {number} n
 * @return {number[]}
 */
 var grayCode = function(n) {
  if (n == 0) return ['0'];
  const dict = {};
  
  const combine = (prefix, arr) => {
      if (prefix == '1') arr = arr.reverse()
      const temp = [];
      for (let code of arr) temp.push(prefix + code);
      return temp
  }
  
  const buildGrayCode = (x) => {
      if (x == 1) return ['0', '1'];
      if (!dict[x-1]) dict[x-1] = buildGrayCode(x-1);
      const addZero = combine('0', dict[x-1]);
      const addOne = combine('1', dict[x-1]);
      return [...addZero, ...addOne];
  }
  
  const result = buildGrayCode(n);
  
  for (let i = 0; i < result.length; i++) {
      result[i] = convert(result[i])
  }
  
  return result;
}

var grayCode = function(n) {
  let res = ['0', '1'];

  const generateGC = (i) => {
      if (i == n) return;
      const addZero = getGrayCode([...res], 0);
      const addOne = getGrayCode([...res], 1);
      res = [...addZero, ...addOne];
      generateGC(i+1);
  }
  
  generateGC(1);
  for (let i = 0; i < res.length; i++) 
      res[i] = convert(res[i]);
  return res;
}

function getGrayCode(arr, prefix) {
  const temp = []
  if (prefix == 1) arr.reverse();
  for (let str of arr) temp.push(prefix + str);
  return temp;
}

function convert(str) {
  let n = 0;
  for (let c of str) n = n * 2 + parseInt(c);
  return n;
}