//O(k^n) t and O(n) s
//where k is the height and k is the max number
/* const staircaseTraversal = (height, maxSteps) => {
  return numberOfWaysToTop(height, maxSteps)
}

const numberOfWaysToTop = (height, maxSteps) => {
  if (height <= 1) return 1

  let numberOfWays = 0
  for (let step = 1; step < Math.min(maxSteps, height) + 1; step++) {
    numberOfWays += numberOfWaysToTop(height - step, maxSteps)
  }

  return numberOfWays
} */

//O(n) - t & s
const staircaseTraversal = (height, maxSteps) => {
  let currentNumberOfWays = 0
  const waysToTop = [1]

  for (let currentHeight = 1; currentHeight < height + 1; currentHeight++) {
    const startOfWindow = currentHeight - maxSteps - 1
    const endOfWindow = currentHeight - 1
    if (startOfWindow >= 0) currentNumberOfWays -= waysToTop[startOfWindow]

    currentNumberOfWays += waysToTop[endOfWindow]
    waysToTop.push(currentNumberOfWays)
  }
  return waysToTop[height]
}

console.log(`Number of ways to the top is ${staircaseTraversal(4, 2)}`)
