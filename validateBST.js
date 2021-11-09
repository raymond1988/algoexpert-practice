class BST {
  constructor (value) {
    this.value = value
    this.right = null
    this.left = null
  }
}

const validateBst = tree => {
  return validateBstHelper(tree, -Infinity, Infinity)
}

const validateBstHelper = (tree, minValue, maxValue) => {
  if (tree === null) return true
  if (tree.value < minValue || tree.value >= maxValue) return false
  const leftIsValid = validateBstHelper(tree.left, minValue, tree.value)
  return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue)
}
