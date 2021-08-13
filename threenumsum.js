//O(n^2) time | O(n) space

let targetSum = 0
let array = [12, 3, 1, 2, -6, 5, -8, 6]

const threeNumberSum = (array, targetSum) => {
  // Write your code here.
  //sort the array
  array.sort((a, b) => a - b)
  //left and right pointer
  let triplets = []
  for (let i = 0; i < array.length - 2; i++) {
    //currentSum = currentNumber + leftP + rightP
    let leftP = i + 1
    let rightP = array.length - 1
    while (leftP < rightP) {
      let currentSum = array[i] + array[leftP] + array[rightP]
      if (currentSum === targetSum) {
        triplets.push([array[i], array[leftP], array[rightP]])
        leftP++
        rightP--
      } else if (currentSum < targetSum) {
        leftP++
      } else if (currentSum > targetSum) {
        rightP--
      }
    }
    //if the currentSum is > 0 then move leftP
  }
  return triplets
}

console.log(threeNumberSum(array, targetSum))
