const reverseWordInString = string => {
  const characters = []
  for (const char of string) {
    characters.push(char)
  }

  reverseListRange(characters, 0, characters.length - 1)

  let startOfWord = 0
  while (startOfWord < characters.length) {
    let endOfWord = startOfWord
    while (endOfWord < characters.length && characters[endOfWord] != ' ') {
      endOfWord++
    }
    reverseListRange(characters, startOfWord, endOfWord - 1)
    startOfWord = endOfWord + 1
  }
  return characters.join('')
}
//edcba faef
const reverseListRange = (list, start, end) => {
  while (start < end) {
    const temp = list[start]
    list[start] = list[end]
    list[end] = temp
    start++
    end--
  }
}

//abcde
//edcba
//no

console.log(reverseWordInString("AlgoExpert is the best!"))
