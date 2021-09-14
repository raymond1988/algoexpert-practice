const canSumTabulation = (targetSum, arr) => {
  let table = new Array(targetSum + 1).fill(false)
  table[0] = true
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
        for(let num of arr){
            table[i + num] = true
        }
    }
  }
  return table[targetSum]
}

console.log(canSumTabulation(7, [5, 3, 4]))
console.log(canSumTabulation(300, [7,14]))
