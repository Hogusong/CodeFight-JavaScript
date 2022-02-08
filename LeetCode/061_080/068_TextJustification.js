/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
 var fullJustify = function(words, maxWidth) {
  const ans = [];
  let container = [], wLen = 0;
  const makeLine = (n) => {
      n = maxWidth - n + container.length;
      if (container.length < 2) {
          ans.push(container[0] + ' '.repeat(n));
          return;
      }
      let i = 0;
      while (n > 0) {
          container[i] += ' ';
          n--;
          if (i < container.length - 2) i++;
          else i = 0;
      }
      ans.push(container.join(''));
  }
  
  for (let w of words) {
      if (wLen + w.length <= maxWidth) {
          wLen += w.length + 1;
          container.push(w);
      } else {
          makeLine(wLen);
          wLen = w.length + 1;
          container = [w]
      }
  }
  const line = container.join(' ');
  ans.push(line + ' '.repeat(maxWidth - line.length));
  return ans;
}

// Different type of calculation.
var fullJustify2 = function(words, maxWidth) {
  const result = []
  let strs = []
  let width = 0
  for (let w of words) {
      if (width + w.length + strs.length <= maxWidth) {
          width += w.length
          strs.push(w)
      } else {
          result.push(getLine(strs, width, maxWidth))
          strs = [w]
          width = w.length
      }
  }
  if (strs.length > 0) {
      const str = strs.join(' ')
      result.push(str + ' '.repeat(maxWidth - str.length))
  }
  return result
}

function getLine(strs, width, maxWidth) {
  let ans = ''
  if (strs.length < 2) ans = strs[0] + ' '.repeat(maxWidth)
  else {
      let count = strs.length
      const extraSpace = maxWidth - width
      const eachExtra = Math.floor(extraSpace / (count - 1))
      let spareSpace = extraSpace % (count - 1)
      for (let str of strs) {
          ans += str + ' '.repeat(eachExtra)
          if (spareSpace-- > 0) ans += ' '
      }
  }
  return ans.substring(0, maxWidth)
}
