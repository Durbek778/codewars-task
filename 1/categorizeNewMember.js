function openOrSenior(data) {
  age = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i][0] > 54 && data[i][1] > 7) {
      age.push("Senior");
    } else {
      age.push("Open");
    }
  }

  return age;
}
console.log(
  openOrSenior([
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12],
  ])
);
