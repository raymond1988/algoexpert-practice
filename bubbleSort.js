//Best: O(n) time | O(1) space //if the array was given sorted
//Avg and worst: O(n^2) - t | O(1) space

const bubbleSort = array => {
  let isSorted = false
  let counter = 0 //minor optimization hack, doesn't affect the O t

  while (!isSorted) {
    isSorted = true
    for (let index = 0; index < array.length - 1 - counter; index++) {
      if (array[index] > array[index + 1]) {
        swap(array, index, index + 1)
        isSorted = false
      }
    }
    counter++
  }
  return array
}

const swap = (array, i, j) => {
  const temp = array[j]
  array[j] = array[i]
  array[i] = temp
}

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]))
