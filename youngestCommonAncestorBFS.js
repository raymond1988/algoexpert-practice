class AncestralTree {
  constructor (name) {
    this.name = name
    this.ancestor = null
  }
}

//O(d) t and O(1) s

const getYoungestCommonAncestor = (
  topAncestor,
  descendantOne,
  descendantTwo
) => {
  const depthOne = getDescendantDepth(descendantOne, topAncestor)
  const depthTwo = getDescendantDepth(descendantTwo, topAncestor)
  if (depthOne > depthTwo) {
    return backTrackAncestralTree(
      descendantOne,
      descendantTwo,
      depthOne - depthTwo
    )
  } else {
    return backTrackAncestralTree(
      descendantTwo,
      descendantOne,
      depthTwo - depthOne
    )
  }
}

const getDescendantDepth = (descendant, topAncestor) => {
  let depth = 0
  while (descendant !== topAncestor) {
    depth++
    descendant = descendant.ancestor
  }
  return depth
}

const backTrackAncestralTree = (lowerDescendant, higherDescendant, diff) => {
  while (diff > 0) {
    lowerDescendant = lowerDescendant.ancestor
    diff--
  }
  while (lowerDescendant !== higherDescendant) {
    lowerDescendant = lowerDescendant.ancestor
    higherDescendant = higherDescendant.ancestor
  }
  return lowerDescendant
}
