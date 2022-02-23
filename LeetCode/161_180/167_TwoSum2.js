/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
  const dict = {};
  for (let i = 0; i < numbers.length; i++) {
      const key = target - numbers[i];
      if (dict.hasOwnProperty(key)) return [dict[key], i + 1];
      else dict[numbers[i]] = i + 1;
  }
};