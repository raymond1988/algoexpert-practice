const longestCommonSubsequence = (str1, str2) => {
  const length = []

  for (let i = 0; i <= str2.length; i++) {
    length.push(new Array(str1.length + 1).fill(0))
  }
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        length[i][j] = length[i - 1][j - 1] + 1
      } else {
        length[i][j] = Math.max(length[i - 1][j], length[i][j - 1])
      }
    }
  }
  return buildSequence(length, str1)
}

const buildSequence = (length, string) => {
  const sequence = []
  let i = length.length - 1
  let j = length[0].length - 1
  while (i !== 0 && j !== 0) {
    if (length[i][j] === length[i - 1][j]) {
      i--
    } else if (length[i][j] === length[i][j - 1]) {
      j--
    } else {
      sequence.unshift(string[j - 1])
      i--
      j--
    }
  }
  return sequence
}

console.log(longestCommonSubsequence('ZXVVYZW', 'XKYKZPW'))
