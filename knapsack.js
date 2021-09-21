const knapsackProblem = (items, capacity) => {
  const knapsackValues = []
  for (let i = 0; i <= items.length; i++) {
    const row = new Array(capacity + 1).fill(0)
    knapsackValues.push(row)
  }

  for (let i = 1; i <= items.length; i++) {
    const currentWeight = items[i - 1][1] // 0 index
    const currentValue = items[i - 1][0] //0 index
    for (let c = 0; c <= capacity; c++) {
      if (currentWeight > c) {
          //whatever that in the above row
        knapsackValues[i][c] = knapsackValues[i - 1][c]
      } else {
          //get the max value btwn the value right above
          //or the value of the prev insertion plus current
        knapsackValues[i][c] = Math.max(
          knapsackValues[i - 1][c],
          knapsackValues[i - 1][c - currentWeight] + currentValue
        )
      }
    }
  }
  return [
    knapsackValues[items.length][capacity],
    getKnapsackItems(knapsackValues, items)
  ]
}

const getKnapsackItems = (knapsackValues, items) => {
  const sequence = []
  let i = knapsackValues.length - 1
  let c = knapsackValues[0].length - 1
  while (i > 0) {
    if (knapsackValues[i][c] === knapsackValues[i - 1][c]) {
      i -= 1
    } else {
      sequence.unshift(i - 1)
      c -= items[i - 1][1]
      i -= 1
    }
    if (c === 0) break
  }
  return sequence
}

console.log(
  knapsackProblem(
    [
      [1, 2],
      [4, 3],
      [5, 6],
      [6, 7]
    ],
    10
  )
)
