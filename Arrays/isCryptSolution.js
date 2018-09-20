function isCryptSolution(crypt, solution) {
  const obj = {}
  for (let i=0; i<solution.length; i++) {
      obj[solution[i][0]] = solution[i][1]
  }    
  const num0 = getDecode(obj, crypt[0]);
  const num1 = getDecode(obj, crypt[1]);
  const num2 = getDecode(obj, crypt[2]);
  return num2 === num0 + num1
}

function getDecode(obj, word){
  if (word.length === 1) return parseInt(obj[word[0]], 10)
  if (obj[word[0]] === '0') return NaN

  let num = ''
  for (let i=0; i<word.length; i++) {
    if (word[i] in obj) num += obj[word[i]]
    else return NaN
  }
  return parseInt(num, 10)
}
