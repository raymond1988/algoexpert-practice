const maxPathSum = tree => {
  const [_, maxSum] = findMaxSum(tree)
  return maxSum
}

const findMaxSum = tree => {
  if (tree === null) return [0, -Infinity]

  const [leftMaxSumAsBranch, leftMaxPathSum] = findMaxSum(tree.left)
  const [rightMaxSumAsBranch, rightMaxPathSum] = findMaxSum(tree.right)
  const maxChildSumBranch = Math.max(leftMaxSumAsBranch, rightMaxSumAsBranch)

  const { value } = tree
  const maxSumAsBranch = Math.max(maxChildSumBranch + value, value)
  const maxSumAsRootNode = Math.max(
    leftMaxSumAsBranch + value + rightMaxSumAsBranch,
    maxSumAsBranch
  )
  const maxPathSum = Math.max(leftMaxPathSum, rightMaxPathSum, maxSumAsRootNode)

  return [maxSumAsBranch, maxPathSum]
}
