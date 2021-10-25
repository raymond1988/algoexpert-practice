const ambiguousMeasurements = (measuringCups, low, high) => {
  const memoization = {}
  return canMeasureInRange(measuringCups, low, high, memoization)
}

const canMeasureInRange = (measuringCups, low, high, memoization) => {
  const memoizeKey = createHashableKey(low, high)
  if (memoizeKey in memoization) return memoization[memoizeKey]

  if (low <= 0 && high <= 0) return false

  let canMeasure = false
  for (const cup of measuringCups) {
    const [cupLow, cupHigh] = cup
    if (low <= cupLow && cupHigh <= high) {
      canMeasure = true
      break
    }

    const newLow = Math.max(0, low - cupLow)
    const newHight = Math.max(0, high - cupHigh)
    canMeasure = canMeasureInRange(measuringCups, newLow, newHight, memoization)
    if (canMeasure) break
  }
  memoization[memoizeKey] = canMeasure
  return canMeasure
}

const createHashableKey = (low, high) => {
  return low.toString() + ':' + high.toString()
}

const measuringCups = [
  [200, 210],
  [450, 465],
  [800, 850]
]
const low = 2100
const high = 2300
console.log(ambiguousMeasurements(measuringCups, low, high))
