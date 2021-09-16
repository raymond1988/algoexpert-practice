const maxSumIncreasingSubsequence = array => {
  const sequenceTable = new Array(array.length)
  const sum = array.map(num => num)
  let maxSumIdx = 0

  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i]
    for (let j = 0; j < i; j++) {
      const otherNum = array[j]
      if (otherNum < currentNum && sum[j] + currentNum >= sum[i]) {
        sum[i] = sum[j] + currentNum
        sequenceTable[i] = j
      }
    }
    if (sum[i] >= sum[maxSumIdx]) maxSumIdx = i
  }
  return [sum[maxSumIdx], buildSequence(array, sequenceTable, maxSumIdx)]
}

const buildSequence = (array, sequences, currentIdx) => {
  const sequence = []
  while (currentIdx !== undefined) {
    sequence.unshift(array[currentIdx])
    currentIdx = sequence[currentIdx]
  }
  return sequence
}

//first for loop, start i with 1 not 0

console.log(maxSumIncreasingSubsequence([10, 70, 20, 30, 50, 11, 30]))
