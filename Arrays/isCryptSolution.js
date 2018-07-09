function isCryptSolution(crypt, solution) {
  const w0 = crypt[0]
  const w1 = crypt[1]
  const w2 = crypt[2]
  return getDecrypt(w0, solution) + getDecrypt(w1, solution) === getDecrypt(w2, solution)
}

function getDecrypt(w, solution) {
  if (w.length < 2)  return parseInt(getValue(w, solution),10)
  
  let ans = ''
  for (let i=0; i<w.length; i++) {
      const code = getValue(w[i], solution)
      if(i===0 && code === '0') return 10000000000
      ans += code
  }
  return parseInt(ans, 10)
}

function getValue(w, solution) {
  for (let j=0; j<solution.length; j++) {
      if (w === solution[j][0]) return solution[j][1]
  }   
  return '100000000'
}
