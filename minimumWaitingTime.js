const minimumWaitingTime = queries => {
  queries.sort((a, b) => a - b)
  console.log(queries)
  let totalWaitingTime = 0
  for (let i = 0; i < queries.length; i++) {
    const duration = queries[i]
    const queriesLeft = queries.length - (i + 1)
    totalWaitingTime += duration * queriesLeft
  }

  return totalWaitingTime
}

console.log(minimumWaitingTime([3, 2, 1, 2, 6]))
