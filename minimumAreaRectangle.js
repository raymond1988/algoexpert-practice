//O(n^2) time and O(n) space

let points = [
  [1, 5],
  [5, 1],
  [4, 2],
  [2, 4],
  [2, 2],
  [1, 2],
  [4, 5],
  [2, 5],
  [-1, -2]
]
/* 
function minimumAreaRectangle (points) {
  let columns = initializeColumns(points)
  let minimumAreaFound = Infinity
  const edgesParalletToYAxis = {}

  const sortedColumns = Object.keys(columns)
    .map(col => parseInt(col))
    .sort((a, b) => a - b)

  for (const x of sortedColumns) {
    let yValuesInCurrentCol = columns[x].sort((a, b) => a - b)

    for (
      let currentIdx = 0;
      currentIdx < yValuesInCurrentCol.length;
      currentIdx++
    ) {
      const y2 = yValuesInCurrentCol[currentIdx]
      for (let previousIdx = 0; previousIdx < currentIdx; previousIdx++) {
        const y1 = yValuesInCurrentCol[previousIdx]
        const pointString = y1.toString() + ':' + y2.toString()

        if (pointString in edgesParalletToYAxis) {
          const currentArea =
            (x - edgesParalletToYAxis[pointString]) * (y2 - y1)
          minimumAreaFound = Math.min(minimumAreaFound, currentArea)
        }

        edgesParalletToYAxis[pointString] = x
      }
    }
  }
  return minimumAreaFound !== Infinity ? minimumAreaFound : 0
}

function initializeColumns (points) {
  const columns = {}

  for (const point of points) {
    const [x, y] = point
    if (!columns[x]) {
      columns[x] = []
    }
    columns[x].push(y)
  }
  return columns
} */

function minimumAreaRectangle (points) {
    
}
console.log(minimumAreaRectangle(points))
