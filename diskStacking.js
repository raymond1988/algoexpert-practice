//O(n^2) - t O(n) - s

const diskStacking = disks => {
  disks.sort((a, b) => a[2] - b[2])
  const heights = disks.map(disk => disks[2])
  const sequences = new Array(disks.length)
  let maxHeightIdx = 0
  for (let i = 1; i < disks.length; i++) {
    const currentDisk = disks[i]
    for (let j = 0; j < i; j++) {
      const otherDisk = disks[j]
      if (areValidDimensions(otherDisk, currentDisk)) {
        if (heights[i] <= currentDisk[2] + heights[j]) {
          heights[i] = currentDisk[2] + heights[j]
          sequences[i] = j
        }
      }
    }
    if (heights[i] >= heights[maxHeightIdx]) maxHeightIdx = i
  }
  return buildSequence(disks, sequences, maxHeightIdx)
}

const areValidDimensions = (otherDisk, currentDisk) => {
  return (
    otherDisk[2] < currentDisk[2] &&
    otherDisk[1] < currentDisk[1] &&
    otherDisk[0] < currentDisk[0]
  )
}

const buildSequence = (array, sequences, currentIdx) => {
  const sequence = []
  while (currentIdx !== undefined) {
    sequence.unshift(array[currentIdx])
    currentIdx = sequences[currentIdx]
  }
  return sequence
}
console.log(
  diskStacking([
    [2, 1, 2],
    [3, 2, 3],
    [2, 2, 8],
    [2, 3, 4],
    [1, 3, 1],
    [4, 4, 5]
  ])
)
