const canConstructTabulation = (target, wordBank) => {
  const table = new Array(target.length + 1).fill(false)
  table[0] = true

  for (let i = 0; i <= table.length; i++) {
    if (table[i] === true) {
      for (let word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true
        }
      }
    }
  }
  return table[target.length]
}

console.log(
  canConstructTabulation('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])
)
