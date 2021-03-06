const searchForRange = (array, target) => {
  const finalRange = [-1, -1]
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, true)
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, false)
  return finalRange
}

const alteredBinarySearch = (
  array,
  target,
  left,
  right,
  finalRange,
  goLeft
) => {
  if (left > right) return

  const mid = Math.floor((left + right) / 2)

  if (array[mid] < target) {
    alteredBinarySearch(array, target, mid + 1, right, finalRange, goLeft)
  } else if (array[mid] > target) {
    alteredBinarySearch(array, target, left, mid - 1, finalRange, goLeft)
  } else {
    if (goLeft) {
      if (mid === 0 || array[mid - 1] !== target) {
        finalRange[0] = mid
      } else {
        alteredBinarySearch(array, target, left, mid - 1, finalRange, goLeft)
      }
    } else {
      if (mid === array.length - 1 || array[mid + 1] !== target) {
        finalRange[1] = mid
      } else {
        alteredBinarySearch(array, target, mid + 1, right, finalRange, goLeft)
      }
    }
  }
}

let arr = [3,5,6,7,8,8,8,8,10]

console.log(searchForRange(arr, 8))
