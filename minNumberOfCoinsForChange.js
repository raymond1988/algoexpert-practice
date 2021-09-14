
/* 
function minNumberOfCoinsForChange (n, denoms) {
  if (n < 0) return null
  if (n === 0) return []

  let shortestCombination = null
  for (let denom of denoms) {
    const remainder = n - denom
    const remainderCombination = minNumberOfCoinsForChange(remainder, denoms)
    //if you reached 0, then push the coins used to reach 0 in to a 2D array.
    if (remainderCombination != null) {
      const combination = [...remainderCombination, denom]
      if(shortestCombination === null || combination.length < shortestCombination.length){
          shortestCombination = combination
      }
    }
    
  }
  return shortestCombination
}
 */
//O(m^2*n) - t
//O(m^2)
/* 
function minNumberOfCoinsForChange (n, denoms) {
  let table = new Array(n + 1).fill(null)
  table[0] = []
  for(let i = 0; i <= n; i++){
    if(table[i] !== null){
      for (const denom of denoms) {
        const combination = [...table[i], denom]
        if(!table[i + denom] || table[i + denom].length > combination.length){
         table[i + denom] = combination 
        }
      }
    }
  }
  return !table[n] ? -1 : table[n].length
}
 */
function minNumberOfCoinsForChange(n, denoms) {
  const numOfCoins = new Array(n + 1).fill(Infinity)
  numOfCoins[0] = 0
  for (const denom of denoms) {
    for (let amount = 0; amount < numOfCoins.length; amount++) {
      if(denom <= amount){
        numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount - denom] + 1)
      }
      
    }
  }
  return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1
}
console.log(minNumberOfCoinsForChange(7, [1,5,10] ))
console.log(minNumberOfCoinsForChange(7, [2,4]))

