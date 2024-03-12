// return masked string
function maskify(cc) {
  sliced = cc.slice(-4);
  return sliced.padStart(cc.length, "#");
}
console.log(maskify("Skippy"));

// 2ng solution

// function maskify(cc) {
//   cc = cc.split("");
//   console.log(cc);

//   for (var i = 0; i < cc.length - 4; i++) {
//     cc[i] = "#";
//   }
//   console.log(cc);

//   cc = cc.join("");
//   return cc;
// }
// console.log(maskify("Skippy"));
