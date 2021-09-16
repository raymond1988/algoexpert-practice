const numberOfWaysToTravelGraph = (row, col) => {
  //initialize the col index 0, with value 0
  let numberOfWays = []
  for (let i = 0; i <= row; i++) {
    numberOfWays[i] = []
    for (let j = 0; j <= col; j++) {
      numberOfWays[i] = 0
    }
  }
  for (let j = 1; j <= col; j++) {
    for (let i = 1; i <= row; i++) {
      if (j === 1 || i === 1) {
        numberOfWays[j][i] = 1
      } else {
        const waysLeft = numberOfWays[j][i - 1]
        const waysUp = numberOfWays[j - 1][i]
        numberOfWays[j][i] = waysLeft + waysUp
      }
    }
  }

  return numberOfWays[row][col]
}

console.log(numberOfWaysToTravelGraph(3, 3))
