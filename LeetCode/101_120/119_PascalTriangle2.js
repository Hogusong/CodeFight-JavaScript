/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
  let result = [1];
  for (let i = 1; i <= rowIndex; i++) {
      const temp = result;
      result = [];
      for (let j = 0; j <= temp.length; j++) {
          if (j == 0) result[j] = temp[j];
          else if (j == temp.length) result[j] = temp.at(-1);
          else result[j] = temp[j-1] + temp[j];
      }
  }
  return result;
};