let array = [7, 6, 4, -1, 1, 2]
let targetSum = 16

function fourNumberSum (array, targetSum) {
  let allPairSums = {}
  let quadruplets = []
  for (let i = 1; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const currentSum = array[j] + array[i]
      const difference = targetSum - currentSum
      if (difference in allPairSums) {
        for (const pair of allPairSums[difference]) {
          quadruplets.push(pair.concat([array[i], array[j]]))
        }
      }
    }
    for (let k = 0; k < i; k++) {
      const currentSum = array[k] + array[i]
      if (!(currentSum in allPairSums)) {
        allPairSums[currentSum] = [[array[k], array[i]]]
      } else {
        allPairSums[currentSum].push([array[k], [array[i]]])
      }
    }
  }
  return quadruplets
}

console.log(fourNumberSum(array, targetSum))
