//best and average - O(nlog(n)) t | O(log(n)) s
//worst - O(n^2) t and O(log(n)) s

const quickSort = array => {
  quickSortHelper(array, 0, array.length - 1)
  return array
}

const quickSortHelper = (array, startIdx, endIdx) => {
  if (startIdx >= endIdx) return
  const pivotIdx = startIdx
  const leftIdx = startIdx + 1
  const rightIdx = endIdx
  while (rightIdx >= leftIdx) {
    if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
      swap(leftIdx, rightIdx, array)
    }
    if (array[leftIdx] <= array[pivotIdx]) leftIdx++
    if (array[rightIdx] >= array[pivotIdx]) rightIdx--
  }
  swap(pivotIdx, rightIdx, array)
  const leftSubarrayIsSmaller =
    rightIdx - 1 - startIdx < endIdx - (rightIdx + 1)

  if (leftSubarrayIsSmaller) {
    quickSortHelper(array, startIdx, rightIdx - 1)
    quickSortHelper(array, rightIdx + 1, endIdx)
  } else {
    quickSortHelper(array, rightIdx + 1, endIdx)
    quickSortHelper(array, startIdx, rightIdx - 1)
  }
}

const swap = (i, j, array) => {
  const temp = array[j]
  array[j] = array[i]
  array[j] = temp
}
