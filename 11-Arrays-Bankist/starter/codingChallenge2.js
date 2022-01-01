const dogAge1 = [5, 2, 4, 1, 15, 8, 3];
const dogAge2 = [5, 2, 4, 1, 15, 8, 3];

function calcAverageHumanAge(dogsAge) {
  const humanAge = dogsAge.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  console.log(humanAge);
  const adults = humanAge.filter(age => age >= 18);
  console.log(adults);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  return average;
}
console.log(calcAverageHumanAge(dogAge1));
