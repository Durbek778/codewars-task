function findShort(s) {
  a = s.split(" ").map((el) => el.length);
  b = Math.min(...a);
  return b;
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
