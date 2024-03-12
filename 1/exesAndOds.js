function XO(str) {
  let a = str.toLowerCase();
  let b = a.split("");
  let x = 0;
  let o = 0;
  for (let i = 0; i < b.length; i++) {
    if (b[i] === "x") {
      x += 1;
    } else if (b[i] === "o") {
      o++;
    }
  }

  return x === o;
}
console.log(XO("xxXmdo"));
