const sumOfSquares = numbers => numbers.reduce((sum, num) => sum + (num ** 2), 0);
const numbers = [1, 2, 3, 4, 5];
const result = sumOfSquares(numbers);
console.log(result); // Output: 55 (1^2 + 2^2 + 3^2 + 4^2 + 5^2)
