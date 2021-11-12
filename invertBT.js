class BinaryTree {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const invertBinaryTree = tree => {
  if (tree === null) return
  swapLeftWithRight(tree)
  invertBinaryTree(tree.left)
  invertBinaryTree(tree.right)
}

const swapLeftWithRight = tree => {
  const left = tree.left
  tree.left = tree.right
  tree.right = left
}

//iterate through the tree
//should i have an idea of the level
//check if there is a node. i'e a left or right
//is there a corresponding right or left node for it?
//what to do if there isn't?
//can i implement this using some other ds?
//recursion? while?
