function squareDigits(num) {
  arrey = num.toString().split("");

  mapped = arrey.map((element) => element ** 2);

  console.log(typeof +mapped.join(""));

  return +mapped.join("");
}

console.log(squareDigits(2112));
