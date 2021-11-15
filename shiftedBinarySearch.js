/* 
  Write a function that takes in a sorted array of distinct integers as well as a target
  integer. The caveat is that the integers in the array have been shifted by
  some amount; in other words, they've been moved to the left or to the right by
  one or more positions. 
 */

//O(log(n)) - t and O(1) - s
const shiftedBinarySearch = (array, target) => {
  return shiftedBinarySearchHelper(array, target, 0, array.length - 1)
}

const shiftedBinarySearchHelper = (array, target, left, right) => {
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    const potentialMatch = array[middle]
    const leftNum = array[left]
    const rightNum = array[right]

    if (target === potentialMatch) {
      return middle
    } else if (leftNum <= potentialMatch) {
      if (target < potentialMatch && target >= leftNum) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    } else {
      if (target > potentialMatch && target <= rightNum) {
        left = middle + 1
      } else {
        right = middle - 1
      }
    }
  }
  return -1
}

//24,25,0,1,2
