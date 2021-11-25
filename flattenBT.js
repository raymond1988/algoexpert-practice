class BinaryTree {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const flattenBinaryTree = root => {
  const [leftMost, _] = flattenTree(root)
  return leftMost
}

const flattenTree = node => {
  let leftMost, rightMost

  if (node.left === null) {
    leftMost = node
  } else {
    const [leftSubtreeLeftMost, leftSubtreeRightMost] = flattenTree(node.left)
    connectNodes(leftSubtreeRightMost, node)
    leftMost = leftSubtreeLeftMost
  }

  if (node.right === null) {
    rightMost = node
  } else {
    const [rightSubtreeLeftMost, rightSubtreeRightMost] = flattenTree(
      node.right
    )
    connectNodes(node, rightSubtreeLeftMost)
    rightMost = rightSubtreeRightMost
  }
  return [leftMost, rightMost]
}

const connectNodes = (left, right) => {
  left.right = right
  right.left = left
}
