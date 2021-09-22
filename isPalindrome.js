// O(n^2) - time O(n) - space
/* const isPalindrome = string => {
  let reverseString = ''
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i]
  }
  return string === reverseString
}
 */
//O(n) - time O(1) - space
const isPalindrome = string => {
  let leftPtr = string[0]
  let rightPtr = string.length - 1
  while (leftPtr < rightPtr) {
    if (string[leftPtr] !== string[rightPtr]) return false
    leftPtr++
    rightPtr--
  }
  return true
}

console.log(isPalindrome("abcdedcba"));
