function firstNotRepeatingCharacter2(s) {
  for (i=0; i<s.length; i++) {
      const l = s[i]
      if (s.indexOf(l) === i && s.indexOf(l, i+1) < 0 ) return l;
  }
  return '_'
}

const msg = "asj;las f;oanjf qwjo ca.,djasdfjk";
console.log(firstNotRepeatingCharacter(msg))
console.log(firstNotRepeatingCharacter2(msg))
