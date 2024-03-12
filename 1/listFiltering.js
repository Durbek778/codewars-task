function filter_list(l) {
  result = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === "number") {
      result.push(l[i]);
    }
  }
  return result;
}
console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
