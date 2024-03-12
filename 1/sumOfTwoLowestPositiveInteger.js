function sumTwoSmallestNumbers(numbers) {
  filtered = numbers.sort((a, b) => a - b);
  sum = filtered[0] + filtered[1];
  return filtered;
}
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
