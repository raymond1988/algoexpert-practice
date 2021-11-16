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

const indexEqualsValueHelper = (array, leftIdx, rightIdx) => {
  const middle = Math.floor((left + right) / 2)
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
}

let array = [-5, -3, 0, 3, 4, 5, 9] //sorted array
console.log(indexEqualsValue(array))
