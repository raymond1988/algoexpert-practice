//Write a function that takes in an array of distinct integers as well
// as an interger k and that returns the kth smallest integer in that array

//the function shouls do this in linear time on average.

//best = O(n) t & O(1) s
//average = O(n) t & O(1) s
//worst = O(n^2) t & O(1) s
const quickSelect = (array, k) => {
  const position = k - 1
  return quickSelectHelper(array, 0, array.length - 1, position)
}

const quickSelectHelper = (array, startIdx, endIdx, position) => {
  while (true) {
    if (startIdx > endIdx) {
      throw new Error('Your algorithm should never arrive here!')
    }
    const pivotIdx = startIdx
    let leftIdx = startIdx + 1
    let rightIdx = endIdx
    while (leftIdx <= rightIdx) {
      if (
        array[leftIdx] > array[pivotIdx] &&
        array[rightIdx] < array[pivotIdx]
      ) {
        swap(leftIdx, rightIdx, array)
      }
      if (array[leftIdx] <= array[pivotIdx]) {
        leftIdx++
      }
      if (array[rightIdx] >= array[pivotIdx]) {
        rightIdx--
      }
    }
    swap(pivotIdx, rightIdx, array)
    if (rightIdx === position) {
      return array[rightIdx]
    } else if (rightIdx < position) {
      startIdx = rightIdx + 1
    } else {
      endIdx = rightIdx - 1
    }
  }
}

const swap = (i, j, array) => {
  const temp = array[j]
  array[j] = array[i]
  array[i] = temp
}
