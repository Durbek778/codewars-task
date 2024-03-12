function highAndLow(numbers) {
  array = numbers.split(" ");
  console.log(array);
  sorted = array.sort(function (a, b) {
    return a - b;
  });
  console.log(sorted);
  lastNumber = sorted[sorted.length - 1];
  firstNumber = sorted[0];

  return lastNumber + " " + firstNumber;
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
