'use strict';

const dogAge1 = [5, 2, 4, 1, 15, 8, 3];
const dogAge2 = [5, 2, 4, 1, 15, 8, 3];

function calcAverageHumanAge(dogsAge) {
  const averageHumanAge =
    dogsAge
      .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
      .filter(age => age >= 18)
      .reduce((acc, age) => acc + age, 0) / dogsAge.length;

  return averageHumanAge;
}
console.log(calcAverageHumanAge(dogAge1));
