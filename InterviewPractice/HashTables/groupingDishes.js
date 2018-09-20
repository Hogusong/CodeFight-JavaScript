function groupingDishes(dishes) {
  const group = {} ;
  dishes.forEach((dish) => {
      for (let i=1; i<dish.length; i++) {
          if (dish[i] in group) group[dish[i]].push(dish[0])
          else group[dish[i]] = [dish[0]]
      }
  })
  let list = []
  for (key in group) {
      if (group[key].length > 1) list.push(key)
  }
  list.sort()
  let ans = []
  for (let i=0; i<list.length; i++) {
      const temp = [list[i]].concat(group[list[i]].sort())
      ans.push(temp)
  }
  return ans
}
