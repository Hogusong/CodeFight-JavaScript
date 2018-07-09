var list = []

function possibleSums(coins, quantity) {
  const maxQty = Math.max.apply(null, quantity)
  const index = quantity.indexOf(maxQty)
  let sets = new Set()
  for (let i=1; i<=maxQty; i++) {
      sets.add(coins[index]*i)
  }
  console.log(sets)
  for (let i=0; i<coins.length; i++) {
    if ( i !== index) {
          for (let j=0; j<quantity[i]; j++) {
              const temp = new Set(sets);
              for (let k of sets) {
                  temp.add(k+coins[i])
              }
              temp.add(coins[i])
              sets = temp
          }
      }
  }
  // sets.forEach(getArray)
  // console.log(list, Math.max.apply(null, list), list.instanceof)
  return sets.size
}

function getArray(k, v) {
  list.push(k)
}

console.log(possibleSums([1,5,10,25], [2,2,3,1]))
