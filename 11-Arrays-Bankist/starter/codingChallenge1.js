const j1 = [3, 5, 2, 12, 7];
const k1 = [4, 1, 15, 8, 3];
const j2 = [(9, 16, 6, 8, 3)];
const k2 = [10, 5, 6, 1, 4];
const checkDogs = function (dogsJulia, dogsKate) {
  dogsJuliaCopy = [...dogsJulia];
  dogsJuliaCopy.splice(0, 1);
  dogsJuliaCopy.splice(-2);

  const allDogs = [...dogsJuliaCopy, ...dogsKate];
  allDogs.forEach(function (age, i) {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an adult and is ${age} old.`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
checkDogs(j1, k1);
checkDogs(j2, k2);
