//Best: O(n) time | O(1) space //if the array was given sorted
//Avg and worst: O(n^2) - t | O(1) space

const insertionSort = array => {
  for (let i = 1; i < array.length; i++) {
    let j = i
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array)
      j -= 1
    }
  }
  return array
}

const swap = (i, j, array) => {
  const temp = array[j]
  array[j] = array[i]
  array[i] = temp
}
