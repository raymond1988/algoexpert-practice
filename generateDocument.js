/* //brute force approach
const generateDocument = (string, document) => {
  if (string.length < document.length) return false

  let documentLetterCountHashMap = new Map()
  let stringLetterCountHashMap = new Map()
  for (const char of document) {
    documentLetterCountHashMap.has(char)
      ? documentLetterCountHashMap.set(
          char,
          documentLetterCountHashMap.get(char) + 1
        )
      : documentLetterCountHashMap.set(char, 1)
  }
  for (const char of string) {
    stringLetterCountHashMap.has(char)
      ? stringLetterCountHashMap.set(
          char,
          stringLetterCountHashMap.get(char) + 1
        )
      : stringLetterCountHashMap.set(char, 1)
  }

  if (
    documentLetterCountHashMap.keys().length >
    stringLetterCountHashMap.keys().length
  )
    return false

  let documentKeys = documentLetterCountHashMap.keys()
  for (const key of documentKeys) {
    let docKeyLength = documentLetterCountHashMap.get(key)
    let strKeyLength = stringLetterCountHashMap.get(key)
    if (strKeyLength === undefined || docKeyLength > strKeyLength) {
      return false
    }
  }
  return true
} */

const generateDocument = (characters, document) => {
  // Write your code here.
  let characterCounts = {}

  for (const character of characters) {
    if (!(character in characterCounts)) characterCounts[character] = 0
    characterCounts[character]++
  }

  for (const character of document) {
    if (!(character in characterCounts) || characterCounts[character] === 0)
      return false
    characterCounts[character]--
  }
  return true
}
console.log(
  generateDocument('Bste!hetsi ogEAxpelrt x ', 'AlgoExpert is the Best!')
)
console.log(
  generateDocument('A', 'a') //false
)
