// function toJadenCase(string) {
//   splited = string.split(" ");
//   console.log(splited);
//   return splited.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
// }
// console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

console.log("How can mirrors be real if our eyes aren't real".toJadenCase());
