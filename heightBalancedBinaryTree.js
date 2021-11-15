class BinaryTree {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class TreeInfo {
  constructor (isBalanced, height) {
    this.isBalanced = isBalanced
    this.height = height
  }
}

const heightBalancedBinaryTree = tree => {
  const treeInfo = getTreeInfo(tree)
  return treeInfo.isBalanced
}

const getTreeInfo = node => {
  if (node === null) return new TreeInfo(true, -1)

  const leftSubTreeInfo = getTreeInfo(node.left)
  const rightSubTreeInfo = getTreeInfo(node.right)

  const isBalanced =
    leftSubTreeInfo.isBalanced &&
    rightSubTreeInfo.isBalanced &&
    Math.abs(leftSubTreeInfo.height - rightSubTreeInfo.height) <= 1

  const height = Math.max(leftSubTreeInfo.height, rightSubTreeInfo.height) + 1
  return new TreeInfo(isBalanced, height)
}
