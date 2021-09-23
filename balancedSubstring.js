//O(n3) t O(n) space
//first brute force solution
//(())(
const longestBalancedSubstring = string => {
  let maxLength = 0

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 2; j < string.length + 1; j++) {
      if (isBalanced(string.slice(i, j))) {
        const currentLength = j - i
        maxLength = Math.max(maxLength, currentLength)
      }
    }
  }
  return maxLength
}
//stack implentation
const isBalanced = string => {
  const openParensStack = []
  for (const char of string) {
    if (char === '(') {
      openParensStack.push(char)
    } else if (openParensStack.length > 0) {
      openParensStack.pop()
    } else {
      return false
    }
  }
  return openParensStack.length === 0
}
/* const longestBalancedSubstring = string => {}
 */
console.log(longestBalancedSubstring('(())('))
