/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
  let roman = '';
  let n = Math.floor(num / 1000);
  if (n > 0) {
      num = num % 1000;
      roman += 'M'.repeat(n);
  }
  n = Math.floor(num / 100);
  num = num % 100;
  if (n == 9) roman += 'CM';
  else if (n > 4) roman += 'D' + 'C'.repeat(n - 5);
  else if (n == 4) roman += 'CD';
  else if (n > 0) roman += 'C'.repeat(n);

  n = Math.floor(num / 10);
  num = num % 10;
  if (n == 9) roman += 'XC';
  else if (n > 4) roman += 'L' + 'X'.repeat(n - 5);
  else if (n == 4) roman += 'XL';
  else if (n > 0) roman += 'X'.repeat(n);

  if (num == 9) roman += 'IX';
  else if (num > 4) roman += 'V' + 'I'.repeat(num - 5);
  else if (num == 4) roman += 'IV';
  else if (num > 0) roman += 'I'.repeat(num);
  
  return roman;
};

var intToRoman2 = function(num) {
  const nums = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  const letters = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  let roman = '';
  let i = nums.length-1;
  while (num > 0) {
      if (num >= nums[i]) {
          roman += letters[i]
          num -= nums[i];
      } else i--;
  }
  return roman;
};