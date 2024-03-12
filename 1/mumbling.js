function accum(s) {
  upper = s.toLowerCase();
  console.log(upper);

  arrey = upper.split("");
  console.log(arrey);

  mapped = arrey.map(
    (element, index) => element.toUpperCase() + element.repeat(index)
  );
  console.log(mapped);

  return mapped.join("-");
}
console.log(accum("ZpglnRxqenU"));
