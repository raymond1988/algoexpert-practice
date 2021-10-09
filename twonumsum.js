let array = [5, 1, 22, 25, 6, -1, 8, 10]
let sequence = [1, 6, -1, 10]

const isValidSubsequence = (array, sequence) => {
  // Write your code here.
  let seqId = 0
  for (let value of array) {
    if (seqId == sequence.length) break

    if (value == sequence[seqId]) seqId++
  }
  console.log(seqId == sequence.length)
}

isValidSubsequence(array, sequence)
