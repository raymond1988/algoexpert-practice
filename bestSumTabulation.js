const bestSumTabulation = (targetSum, arr) => {
  let table = new Array(targetSum + 1).fill(null)
  table[0] = []

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of arr) {
        const combination = [...table[i], num]
        if (!table[i + num] || table[i + num].length > combination.length) {
          table[i + num] = combination
        }
      }
    }
  }
  return table[targetSum]
}
console.log(bestSumTabulation(7, [2, 3]))
console.log(bestSumTabulation(7, [2, 4]))
console.log(bestSumTabulation(10, [3, 1, 10, 4]))
console.log(bestSumTabulation(300, [7, 14]))
