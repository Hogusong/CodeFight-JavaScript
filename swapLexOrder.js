function swapLexOrder(str, pairs) {
    pairs.forEach((pair,i)=>{
        pairs[i] = [pair[0]-1, pair[1]-1]
    })
    const linked = [];
    for (let i=0; i<str.length; i++) {
        linked.push(new Set([i]))
    }
    for (let [x,y] of pairs) {
        linked[x].add(y)
        linked[y].add(x)
    }

    var group
    var groups = new Set()
    for (let i=0; i<linked.length; i++) {
        const set = linked[i]
        if (set.size > 1) {
            group = new Set()
            set.forEach((v) => { 
                make_group(v) })
            const arr = setToArray(group).sort((a,b) => a-b)
            if (!isInGroups(groups, arr)) {
                groups.add((arr))
            }
        }
    }

    function make_group(index) {
        linked[index].forEach((v) => {
            if (!group.has(v)) {
                group.add(v)
                make_group(v)
            }
        })
    }

    function setToArray(set) {
        const list = []
        set.forEach( (v) => { list.push(v) })
        return list
    }

    function isInGroups(groups, arr) {
        let result = false
        for (let v of groups) {
            if (v.length === arr.length) {
                result = true;
                for (let i=0; i<v.length; i++) {
                    if (v[i] !== arr[i]) {
                        result = false
                        break
                    }
                }
                if (result) return result
            }
        }
        return false
    }

    const word = str.split('')
    groups.forEach((group) => {
        const L = setToArray(group)
        let chars = []
        for (let i=0; i<L.length; i++) {
            chars.push(str[L[i]])
        }
        chars.sort()
        L.forEach((l) => {  word[l] = chars.pop()  })
    })
    return word.join('')
}

console.log(swapLexOrder("fixmfbhyutghwbyezkveyameoamqoi", 
    [[8,5], [10,8], [4,18], [20,12], [5,2], [17,2], [13,25], [29,12], [22,2], [17,11]]))
