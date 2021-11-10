const inOrderTraverse = (tree, array) => {
  if (tree !== null) {
    inOrderTraverse(tree.left, array)
    array.push(tree.value)
    inOrderTraverse(tree.right, array)
  }
  return array
}

const preOrderTraverse = (tree, array) => {
  if (tree !== null) {
    array.push(tree.value)
    preOrderTraverse(tree.left, array)
    preOrderTraverse(tree.right, array)
  }
  return array
}

const postOrderTraverse = (tree, array) => {
  if (tree !== null) {
    postOrderTraverse(tree.left, array)
    postOrderTraverse(tree.right, array)
    array.push(tree.value)
  }
  return array
}

const minHeightBst = array => {
  //the array should be ordered
  return minHeightBstHelper(array, 0, array.length - 1)
}

class BST {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert (value) {
    if (value < this.left) {
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
