function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "") || ["here nothing to replace"];
}
console.log(disemvowel("ad"));
