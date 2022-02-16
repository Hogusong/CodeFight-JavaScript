/**
 * @param {number[]} ratings
 * @return {number}
 */
 var candy = function(ratings) {
  const len = ratings.length;
  let candies = [];
  for (let i = 0; i < len; i++) candies[i] = 1;

  for (let i = 1; i < len; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  let sum = candies[len - 1];
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
    sum += candies[i];
  }
  return sum;
};