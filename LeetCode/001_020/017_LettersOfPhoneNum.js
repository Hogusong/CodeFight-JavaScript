/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  if (digits.length < 1) return [];
  const letters = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  let result = [''];
  for (let n of digits) {
    const temp = [...result];
    result = [];
    for (let t of temp) {
      for (let c of letters[+n]) {
        result.push(t + c);
      }
    }
  }
  return result;
};

// Using a dictionary instead of an array.
var letterCombinations2 = function(digits) {
  if (!digits) return []
  let result = ['']
  const dict = {
      2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8:'tuv', 9:'wxyz'
  }
  for (let digit of digits) {
      const temp = []
      for (let w of result) {
          for (let s of dict[digit]) {
              temp.push(w + s)
          }
      }
      result = temp
  }
  return result
};