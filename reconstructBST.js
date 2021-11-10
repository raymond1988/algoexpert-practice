class BST {
  constructor (value, left = null, right = null) {
    this.value = value
    //how left and right values
    this.left = left
    this.right = right
  }
}

const reconstructBst = preOrderTraversalValues => {
  if (preOrderTraversalValues.length === 0) return null

  const currentValue = preOrderTraversalValues[0]
  //how to get right sub tree
  let rightSubTreeRootIdx = preOrderTraversalValues.length

  for (let idx = 1; idx < preOrderTraversalValues.length; idx++) {
    const value = preOrderTraversalValues[idx]
    if (value >= currentValue) {
      rightSubTreeRootIdx = idx
      break
    }
  }
  //1,1,2,3,4,7

  const leftSubtree = reconstructBst(
    preOrderTraversalValues.slice(1, rightSubTreeRootIdx)
  )
  const righSubtree = reconstructBst(
    preOrderTraversalValues.slice(rightSubTreeRootIdx)
  )
  return new BST(currentValue, leftSubtree, righSubtree)
}

let preOrderTraversalValues = [10, 4, 2, 1, 5, 17, 19, 18]

console.log(reconstructBst(preOrderTraversalValues))
