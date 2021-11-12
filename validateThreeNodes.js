class BST {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const validateThreeNodes = (nodeOne, nodeTwo, nodeThree) => {
  if (isDescendant(nodeTwo, nodeOne)) return isDescendant(nodeThree, nodeTwo)

  if (isDescendant(nodeTwo, nodeThree)) return isDescendant(nodeOne, nodeTwo)

  return false
}

const isDescendant = (node, target) => {
  if (node === null) return false
  if (node === target) return true
  return target.value < node.value
    ? isDescendant(node.left, target)
    : isDescendant(node.right, target)
}
