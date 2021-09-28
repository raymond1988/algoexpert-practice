const minimumCharactersForWords = words => {
  const maxCharFrequencies = {}

  for (const word of words) {
    const characterFrequencies = countCharacterFrequencies(word)
    updateMaximumFrequencies(characterFrequencies, maxCharFrequencies)
  }

  return makeArrayFromCharacterFrequencies(maxCharFrequencies)
}

const countCharacterFrequencies = word => {
  const characterFrequencies = {}
  for (const char of word) {
    if (!(char in characterFrequencies)) characterFrequencies[char] = 0
    characterFrequencies[char] += 1
  }
  return characterFrequencies
}

const updateMaximumFrequencies = (frequencies, maximumFrequencies) => {
  for (const char in frequencies) {
    const frequency = frequencies[char]

    if (char in maximumFrequencies) {
      maximumFrequencies[char] = Math.max(frequency, maximumFrequencies[char])
    } else {
      maximumFrequencies[char] = frequency
    }
  }
}

const makeArrayFromCharacterFrequencies = maxCharFrequencies => {
  const characters = []

  for (const char in maxCharFrequencies) {
    const frequency = maxCharFrequencies[char]

    for (let idx = 0; idx < frequency; idx++) {
      characters.push(char)
    }
  }
  return characters
}

console.log(
  minimumCharactersForWords(['this', 'that', 'did', 'deed', 'them!', 'a'])
)
