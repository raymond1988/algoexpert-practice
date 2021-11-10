//O(n^2)
const sameBsts = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) return false

  if (arrayOne.length === 0 && arrayTwo.length === 0) return true

  if (arrayOne[0] !== arrayTwo[0]) return false

  let leftOne = getSmaller(arrayOne)
  let leftTwo = getSmaller(arrayTwo)
  let rightOne = getBiggerOrEqual(arrayOne)
  let rightTwo = getBiggerOrEqual(arrayTwo)

  return sameBsts(leftOne, leftTwo) && sameBsts(rightOne, rightTwo)
}

const getSmaller = array => {
  const smaller = []
  for (let idx = 1; idx < array.length; idx++) {
    if (array[0] > array[idx]) smaller.push(array[idx])
  }
  return smaller
}

const getBiggerOrEqual = array => {
  const bigger = []
  for (let idx = 1; idx < array.length; idx++) {
    if (array[0] <= array[idx]) bigger.push(array[idx])
  }
  return bigger
}
let arrayOne = [10, 15, 8, 12, 94, 81, 5, 2, 11]
let arrayTwo = [10, 8, 5, 15, 2, 12, 11, 94, 81]

console.log(sameBsts(arrayOne, arrayTwo))
