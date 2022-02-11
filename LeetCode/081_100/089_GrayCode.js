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

function convert(arr) {
  let num = 0;
  for (let x of arr) num = num * 2 + +x;
  return num;
}
