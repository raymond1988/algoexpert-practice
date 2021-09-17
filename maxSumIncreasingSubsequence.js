const maxSumIncreasingSubsequence = array => {
  const sequenceTable = new Array(array.length)
  const sums = array.map(num => num)
  let maxsumsIdx = 0

  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i]
    for (let j = 0; j < i; j++) {
      const otherNum = array[j]
      if (otherNum < currentNum && sums[j] + currentNum >= sums[i]) {
        sums[i] = sums[j] + currentNum
        sequenceTable[i] = j
      }
    }
    if (sums[i] >= sums[maxsumsIdx]) maxsumsIdx = i
  }
  return [sums[maxsumsIdx], buildSequence(array, sequenceTable, maxsumsIdx)]
}

const buildSequence = (array, sequences, currentIdx) => {
  const sequence = []
  while (currentIdx !== undefined) {
    sequence.unshift(array[currentIdx])
    currentIdx = sequences[currentIdx]
  }
  return sequence
}

//first for loop, start i with 1 not 0

console.log(maxSumIncreasingSubsequence([10, 70, 20, 30, 50, 11, 30]))
