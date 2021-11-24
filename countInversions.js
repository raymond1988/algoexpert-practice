//O(nlogn) time | O(n)
const countInversions = array => {
  return countSubArrayInversions(array, 0, array.length)
}

const countSubArrayInversions = (array, start, end) => {
  if (end - start <= 1) return 0

  const middle = start + Math.floor((end - start) / 2)
  const leftInversions = countSubArrayInversions(array, start, middle)
  const rightInversions = countSubArrayInversions(array, middle, end)
  const mergedArrayInversions = mergeSortAndCountInversions(
    array,
    start,
    middle,
    end
  )
  return leftInversions + rightInversions + mergedArrayInversions
}

const mergeSortAndCountInversions = (array, start, middle, end) => {
  const sortedArray = []
  let left = start
  let right = middle
  let inversions = 0

  while (left < middle && right < end) {
    if (array[left] <= array[right]) {
      sortedArray.push(array[left])
      left++
    } else {
      inversions += middle - left
      sortedArray.push(array[right])
      right++
    }
  }

  sortedArray.push(...array.slice(left, middle), ...array.slice(right, end))
  for (let idx = 0; idx < sortedArray.length; idx++) {
    const num = sortedArray[idx]
    array[start + idx] = num
  }
  return inversions
}

console.log(countInversions([2, 3, 3, 1, 9, 5, 6]))
