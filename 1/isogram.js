function isIsogram(str) {
  return new Set(str.toLowerCase()).size == str.length;
}
console.log(isIsogram("abA"));
