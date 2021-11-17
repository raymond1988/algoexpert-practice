const binarySearch = (array, target) => {
  return binarySearchHelper(array, target, 0, array.length - 1)
}

/* //O(log(n)) - t & s
const binarySearchHelper = (array, target, left, right) => {
  if (left > right) return -1
  const middle = Math.floor((left + right) / 2)
  const potentialTarget = array[middle]

  if (potentialTarget === target) {
    return middle
  } else if (target < potentialTarget) {
    return binarySearchHelper(array, target, left, middle - 1)
  } else {
    return binarySearchHelper(array, target, middle + 1, right)
  }
} */

//O(log(n)) - t and O(1) space
const binarySearchHelper = (array, target, left, right) => {
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    const potentialMatch = array[middle]
    if (target === potentialMatch) {
      return middle
    } else if (target < potentialMatch) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }
  return -1
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33))
