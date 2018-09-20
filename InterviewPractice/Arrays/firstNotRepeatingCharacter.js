function firstNotRepeatingCharacter2(s) {
  if (s.length === 1) return s;
  for (i=1; i<s.length; i++) {
      const l = s[i]
      const s1 = s.slice(0,i)
      const s2 = s.slice(i+1)
      if (s1.indexOf(l) < 0 && s2.indexOf(l) < 0)
          return l        
  }
  return '_'
}

function firstNotRepeatingCharacter(s) {
  for (let i=0; i<s.length; i++){
      if (s.indexOf(s[i], i+1) < 0) {
          if (s.indexOf(s[i]) === i) {
              return s[i]
          }
      } 
  }
  return '_'
}
