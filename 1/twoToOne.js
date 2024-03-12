function longest(s1, s2) {
  newArrey = [...new Set(s1 + s2)];
  console.log(newArrey);
  s = newArrey.sort().join("");

  return s;
}
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
