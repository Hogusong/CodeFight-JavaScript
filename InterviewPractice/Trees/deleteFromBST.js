function deleteFromBST(t, queries){
    for (let query of queries) {
        t = deleteOneNode(t, query)
    }
    return t
}

function deleteOneNode(curr, query) {
    if (!curr) return null;
    if (curr.value === query) return deleteNode(curr);
    if (curr.value > query) {
        if (!curr.left) return curr;
        else curr.left = deleteOneNode(curr.left, query)
    } else {
        if (!curr.right) return curr;
        else curr.right = deleteOneNode(curr.right, query)
    }
    return curr
}

function deleteNode(node) {
    const left = node.left;
    const right = node.right;
    if (!left && !right) return null;
    if (!left) return right;
    else {
        if (!left.right) {
            left.right = right;
            return left
        }
        let previous = node;
        node = node.left
        while (node.right) {
            previous = node;
            node = node.right;
        }
        previous.right = node.left
        node.left = left;
        node.right = right;
    }
    return node
}
