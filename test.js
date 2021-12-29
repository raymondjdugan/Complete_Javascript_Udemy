// 'use strict';

// function roll(rolled) {
//   const [timesToRoll, sizeOfDice] = rolled.split('d');
//   const rolledArray = [];
//   let rollTotal = 0;
//   for (let i = 0; i < timesToRoll; i++) {
//     const diceRoll = Math.trunc(Math.random() * sizeOfDice) + 1;
//     rolledArray.push(diceRoll);
//     rollTotal += diceRoll;
//   }

//   return {
//     roll: rolledArray,
//     total: rollTotal,
//   };
// }

// function roll(rolled) {
//   const [timesToRoll, sizeOfDice] = rolled.split('d');
//   const rolledArray = [];
//   let rollTotal = 0;
//   for (let i = 0; i < timesToRoll; i++) {
//     const diceRoll = Math.trunc(Math.random() * sizeOfDice) + 1;
//     rolledArray.push(diceRoll);
//     rollTotal += diceRoll;
//   }

//   return `{\n\tRoll: [${rolledArray}],\n\tTotal: ${rollTotal},\n}`;
// }

// console.log(roll('4d6'));
// console.log(roll('3d20'));
// console.log(roll('5d6'));
