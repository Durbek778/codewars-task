function printerError(s) {
  result = 0;
  for (let index in s) {
    console.log(index);
    // console.log(s);
    if (s[index] > "m") {
      result++;
    }
  }
  return result + "/" + s.length;
}
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));

// console.log("x" > "m");
