function getMiddle(s) {
  if (s.split("").length % 2 === 0)
    return s[s.length / 2 - 1] + s[s.length / 2];
  else return s[Math.floor(s.length / 2)];
}
console.log(getMiddle("testt"));
