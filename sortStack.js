const sortStack = stack => {
  if (stack.length === 0) return stack
  const top = stack.pop()

  sortStack(stack)

  insetInSortedOrder(stack, top)

  return stack
}

const insetInSortedOrder = (stack, value) => {
  if (stack.length === 0 || stack[stack.length - 1] <= value) {
    stack.push(value)
    return
  }
  const top = stack.pop()

  insetInSortedOrder(stack, value)

  stack.push(top)
}

console.log(sortStack([-5, 2, -2, 4, 3, 1]))
