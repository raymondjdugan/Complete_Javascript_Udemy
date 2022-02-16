(function () {
  const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
  ];
  console.log(dogs);

  dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
  console.log(dogs);
  const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
  console.log(
    `Sarah's dog is eating too ${
      dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
    } `
  );

  const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recFood)
    .flatMap(dog => dog.owners);
  console.log(`${ownersEatTooMuch.join(', ')}'s dogs eat too much`);

  const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recFood)
    .flatMap(dog => dog.owners);
  console.log(`${ownersEatTooLittle.join(', ')}'s dogs eat too little`);
  console.log(dogs.some(dog => dog.curFood === dog.recFood));
  const checkEatingOkay = dog =>
    dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
  console.log(dogs.some(checkEatingOkay));
  console.log(dogs.filter(checkEatingOkay));

  const dogsSort = dogs.slice().sort((a, b) => a.recFood - b.recFood);
  console.log(dogsSort);
})();
