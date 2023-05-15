function calculateSum(numbers) {
    let sum = 0;
    numbers.forEach(number => {
      sum += number;
    });
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];
  const sum = calculateSum(numbers);
  console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)
    