function descendingOrder(n) {
  console.log(typeof n);

  string = n.toString();
  console.log(typeof string);

  split = string.split("");
  console.log(split);

  sorted = split.sort(function (a, b) {
    return b - a;
  });
  console.log(typeof parseInt(sorted.join("")));

  return parseInt(sorted.join(""));
}

console.log(descendingOrder(0));

// function descendingOrder(n) {
//   type = typeof n;
//   return type;
// }

// console.log(descendingOrder(123456789));
