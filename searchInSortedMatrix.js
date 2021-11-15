//if the 2d array is sorted by row AND by col

//O(n + m) t and O(1) s
const searchInSortedMatrix = (matrix, target) => {
  let row = 0
  let col = matrix[0].length - 1
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] > target) {
      col--
    } else if (matrix[row][col] < target) {
      row++
    } else {
      return [row, col]
    }
  }
  return [-1, -1]
}


