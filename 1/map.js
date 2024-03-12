// function User(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   return model;
// }

// console.log(User("Eagle", "Talon TS", 1993));
// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }

// const car1 = new Car("Eagle", "Talon TSi", 1993);

// console.log(car1);

//////////////////////// Add Length ////////////////////

// function addLength(str) {
//   return str.split(" ").map((s) => s+s.length );
// }
// console.log(addLength("bek kori tvar!"));

/////////////////////// Count of positives / sum of negatives ////////////////

// function countPositivesSumNegatives(input) {
//   let result = [0, 0];

//   input?.map((el) => {
//     el > 0 ? result[0]++ : (result[1] += el);
//   });
//   return input.length > 0 || typeof input === null ? result : [];
// }

// console.log(countPositivesSumNegatives([]));
