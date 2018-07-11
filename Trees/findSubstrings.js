function Tree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function findSubstrings1(words, parts) {
  let obj = {}
  for (let p of parts) {
      if (p.length in obj) obj[p.length].push(p)
      else obj[p.length] = [p]
  }
  
  // keys = [5,4,3,2,1] 
  let keys = Object.keys(obj).sort( (a,b) => a - b < 0);
  
  for (let i=0; i<words.length; i++) {
      let arr = []
      for (let key of keys) {
          const part = obj[key]
          for (let p of part) {
              if (words[i].includes(p)) {
                  arr.push(words[i].replace(p, '[' + p + ']'))
              }
          }
          if (arr.length > 0) {
              arr.sort( (a,b) => a.indexOf('[') > b.indexOf('['))
              words[i] = arr[0];
              break
          }
      }
  }
  return words;
}

function findSubstrings(words, parts) {
  let parts_lens = {}

  for (let part of parts) {
    const len = part.length;
    if (!(len in parts_lens)) parts_lens[len] = {}
    
    add_to_tree(parts_lens[len], part)
  }

  function add_to_tree(t, val) {
    if (val.length === 1) t[val] = false;
    else {
      if (!(val[0] in t)) t[val[0]] = {}
      const next_t = t[val[0]]
      add_to_tree(next_t, val.slice(1))
    }
  }

  function check(string, tree, top=true) {
    if (!string)  return false;
    if (!(string[0] in tree)) return false;
    let temp = (top) ? '[' : '' ;
    let next_tree = tree[string[0]]
    if (next_tree) {
      const next_check = check(string.slice(1), next_tree, false);
      if (!next_check) return false;
      temp += (string[0] + next_check)
    } else {
      temp += (string[0] + ']' + string.slice(1))
    }

    return temp
  }
  
  for (let l of Object.keys(parts_lens).reverse()) {
    for (let i=0; i<words.length; i++) {
      if (words[i].indexOf('[') < 0) {
        for (let j=0; j<words[i].length; j++) {
          const new_end = check(words[i].slice(j), parts_lens[l])
          if (new_end) {
            words[i] = words[i].slice(0,j) + new_end 
            break
          }
        }
      }
    }
  }
  return words
}

words= ["Apple", 
 "Melon", 
 "Orange", 
 "Watermelon"]
parts= ["a", 
 "mel", 
 "lon", 
 "el", 
 "An"]

 console.log(findSubstrings(words, parts))
