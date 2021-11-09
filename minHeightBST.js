const minHeightBst = array => {
  return constrcutMinHeightBst(array, 0, array.length - 1)
}

const constrcutMinHeightBst = (array, startIdx, endIdx) => {
  if (endIdx < startIdx) return null
  const midIdx = Math.floor((startIdx + endIdx) / 2)
  const bst = new BST(array[midIdx])
  bst.left = constrcutMinHeightBst(array, startIdx, midIdx - 1)
  bst.right = constrcutMinHeightBst(array, midIdx + 1, endIdx)
  return bst
}

class BST {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert (value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value)
      } else {
        this.left.insert(value)
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value)
      } else {
        this.right.insert(value)
      }
    }
  }
}
