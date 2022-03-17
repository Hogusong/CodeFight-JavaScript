/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  const res = new Array(secret.length);
  let bulls = 0, cows = 0;
  for (let i = 0; i < guess.length; i++) {
      if (secret[i] == guess[i]) {
          res[i] = 'B';
          bulls++;
      }
  }
  for (let i = 0; i < guess.length; i++) {
      if (res[i] == 'B') continue;
      for (let j = 0; j < secret.length; j++) {
          if (guess[i] != secret[j] || res[j]) continue;
          if (guess[i] == secret[j] && !res[j]) {
              res[j] = 'C';
              cows++;
              break;
          }
      }
  }
  return bulls + 'A' + cows + 'B';
};

var getHint = function(secret, guess) {
  const len = guess.length;
  const s = new Array(10).fill(0), g = [...s];
  let bulls = 0, cows = 0;
  for (let i = 0; i < len; i++) {
      if (secret[i] == guess[i]) bulls++;
      else {
          g[guess[i]]++;
          s[secret[i]]++;
      }
  }
  for (let i = 0; i < 10; i++) {
      cows += Math.min(s[i], g[i]);
  }
  return bulls + 'A' + cows + 'B';
};