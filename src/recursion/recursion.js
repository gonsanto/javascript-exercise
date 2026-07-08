/**
 * Calculate the factorial of a number using recursion
 * Factorial of n (n!) is the product of all positive integers less than or equal to n
 * For example: 5! = 5 × 4 × 3 × 2 × 1 = 120
 * @param {number} n - A non-negative integer
 * @return {number} The factorial of n
 */
export function factorial(n) {
  if (isNaN(n) || n < 0 || n % 1 !== 0 || n === null) {
    throw Error
  }
  if (n === 0) {
    return 1
  }
  let result = n
  if (n !== 1) {
    let next = result - 1
    result = result * next
    next--
    while (next > 1) {
      result = result * next
      next--
    }
  }
  return result
}

/**
 * Calculate the nth Fibonacci number using recursion
 * Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 * Each number is the sum of the two preceding numbers
 * @param {number} n - A non-negative integer representing the position in the sequence
 * @return {number} The nth Fibonacci number
 */
export function fibonacci(n) {
  if (isNaN(n) || n < 0 || n % 1 !== 0 || n === null) {
    throw Error
  }
  let a = 0
  let b = 1
  for (let i = 2; i <= n; i++) {
    const temp = a
    a = b
    b = temp + b
  }
  return n === 0 || n === 1 ? n : b
}
