//O(4^n*n) - t and space
//n is the length of the phone number
const phoneNumberMnemonics = phoneNumber => {
  const currentMnemonic = new Array(phoneNumber.length).fill(0)
  const mnemonicsFoud = []

  phoneNumberMnemonicsHelper(0, phoneNumber, currentMnemonic, mnemonicsFoud)
  return mnemonicsFoud
}

const phoneNumberMnemonicsHelper = (
  idx,
  phoneNumber,
  currentMnemonic,
  mnemonicsFoud
) => {
  if (idx === phoneNumber.length) {
    const mnemonic = currentMnemonic.join('')
    mnemonicsFoud.push(mnemonic)
  } else {
    const digit = phoneNumber[idx]
    const letters = DIGIT_LETTERS[digit]
    for (const letter of letters) {
      currentMnemonic[idx] = letter
      phoneNumberMnemonicsHelper(
        idx + 1,
        phoneNumber,
        currentMnemonic,
        mnemonicsFoud
      )
    }
  }
}

const DIGIT_LETTERS = {
  0: ['0'],
  1: ['1'],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
}

console.log(phoneNumberMnemonics('1905'))
