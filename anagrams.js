//O(w * n * log(n)) - t O(wn) - space
function groupAnagrams (words) {
  // Write your code here.
  const anagrams = {}
  for (const word of words) {
    const sortedWord = word
      .split('')
      .sort()
      .join('')
    if (sortedWord in anagrams) {
      anagrams[sortedWord].push(word)
    } else {
      anagrams[sortedWord] = [word]
    }
  }
  console.log(anagrams);
  return Object.values(anagrams)
}

console.log(
  groupAnagrams(['yo', 'act', 'flop', 'tac', 'foo', 'cat', 'oy', 'olfp', 'cinema', 'iceman'])
)
