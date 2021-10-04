/* const fib  = (num, memo = {}) => {
  if(num in memo) return memo[num]
  if (num <= 2) return 1
  memo[num] = fib(num - 1, memo) + fib(num - 2, memo)
  return memo[num]
} */

const fib = n => {
  if (n <= 2) return 1
  return fib(n - 1) + fib(n - 2)
}

console.log(fib(2))
console.log(fib(7))
//console.log(fib(101))
