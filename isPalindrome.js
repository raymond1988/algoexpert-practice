// O(n^2) - time O(n) - space
const isPalindrome = string => {
  let reverseString = ''
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i]
  }
  return string === reverseString
}
