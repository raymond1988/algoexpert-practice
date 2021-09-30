//O(n) - t and O(n) s

const balancedBrackets = string => {
  const openingBrackets = '({['
  const closingBrackets = ')}]'
  const matchingBrackets = { ')': '(', '}': '{', ']': '[' }
  const stack = []

  for (const char of string) {
    if (openingBrackets.includes(char)) {
      stack.push(char)
    } else if (closingBrackets.includes(char)) {
      //case 1 - empty stack
      if (stack.length === 0) return false
      //case 2
      if (stack[stack.length - 1] === matchingBrackets[char]) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}

console.log(balancedBrackets('([])(){}(())()()'))
