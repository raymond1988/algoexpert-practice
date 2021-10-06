//O(n*2^n) - t | O(n*2^n) - s
/* 
const powerSet = (array, idx = null) => {
  if (idx === null) {
    idx = array.length - 1
  }
  if (idx < 0) return [[]]

  const ele = array[idx]
  const subsets = powerSet(array,idx - 1)
  const length = subsets.length
  for (let i = 0; i < length; i++) {
    const currentSubset = subsets[i]
    subsets.push(currentSubset.concat(ele))
  }
  return subsets
} */

/* const combinations = elements => {
  //base case
  if (elements.length === 0) return [[]]
  //get the first element - we're trying to shrink the array
  //progressing towards the base case
  const firstEl = elements[0]
  //generate the shrikned array
  const rest = elements.slice(1)
  //repeat till you hit the base case by recursion
  const combinationsWithoutFirst = combinations(rest)
  const combinationsWithFirst = []

  combinationsWithoutFirst.forEach(comb => {
    const combinationWithFirst = [...comb, firstEl]
    combinationsWithFirst.push(combinationWithFirst)
  })

  return [...combinationsWithoutFirst, ...combinationsWithFirst]
} */



//console.log(powerSet(['a','b','c']))
console.log(combinations(['a', 'b', 'c']))
