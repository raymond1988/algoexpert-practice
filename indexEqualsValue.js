//write a function that takes in a sorted array of distinct integers and returns
//the first index in the array that is equal to the value at that index.

//O(n) t && O(n) s
/* const indexEqualsValue = array => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    if (index === element) return index
  }
  return -1
} */

//O(log(n)) - t
const indexEqualsValue = array => {
  return indexEqualsValueHelper(array, 0, array.length - 1)
}

/* const indexEqualsValueHelper = (array, leftIdx, rightIdx) => {
  if (leftIdx > rightIdx) return -1

  const middle = leftIdx + Math.floor((leftIdx + rightIdx) / 2)
  const potentialMatch = array[middle]
  if (potentialMatch === middle && middle === 0) {
    return middle
  }
  if (potentialMatch === middle && middle - 1 < array[middle - 1]) {
    return middle
  }
  if (potentialMatch === middle && middle - 1 === array[middle - 1]) {
    indexEqualsValueHelper(array, 0, middle - 1)
  }
  if (potentialMatch > middle) {
    indexEqualsValueHelper(array, middle + 1, rightIdx)
  }
} */

//O(log(n)) -t & s
//space is also log(n) because of recursive function space requirement
//through call stacks
/* const indexEqualsValueHelper = (array, leftIdx, rightIdx) => {
  if (leftIdx > rightIdx) return -1

  const middleIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2)
  const middleValue = array[middleIdx]

  if (middleValue < middleIdx) {
    return indexEqualsValueHelper(array, middleIdx + 1, rightIdx)
  } else if (middleValue === middleIdx && middleIdx === 0) {
    return middleIdx
  } else if (
    middleValue === middleIdx &&
    array[middleIdx - 1] < middleIdx - 1
  ) {
    return middleIdx
  } else {
    return indexEqualsValueHelper(array, leftIdx, middleIdx - 1)
  }
} */

//O(log(n)) - t and O(1) space - iterative solution
const indexEqualsValueHelper = array => {
  let leftIdx = 0
  let rightIdx = array.length - 1

  while (leftIdx <= rightIdx) {
    const middleIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2)
    const middleValue = array[middleIdx]

    if (middleValue < middleIdx) {
      leftIdx = middleIdx + 1
    } else if (middleIdx === middleValue && middleIdx === 0) {
      return middleIdx
    } else if (
      middleIdx === middleValue &&
      array[middleIdx - 1] < middleIdx - 1
    ) {
      return middleIdx
    } else {
      rightIdx = middleIdx - 1
    }
  }
  return -1
}

let array = [-5, -3, 0, 3, 4, 5, 9] //sorted array
console.log(indexEqualsValue(array))
