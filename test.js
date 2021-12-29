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
// 	const gameRoll = {
// 		rolls: [],
// 		rollTotal: 0,
// 	};
// 	const [timesToRoll, sizeOfDice] = rolled.split('d');
// 	for (let i = 0; i < timesToRoll; i++) {
// 		const diceRoll = Math.trunc(Math.random() * sizeOfDice) + 1;
// 		gameRoll.rolls.push(diceRoll);
// 		gameRoll.rollTotal += diceRoll;
// 	}
// 	return gameRoll;
// }

// function roll(rolled) {
// 	const [timesToRoll, sizeOfDice] = rolled.split('d');
// 	const rolls = [];
// 	let rollTotal = 0;
// 	for (let i = 0; i < timesToRoll; i++) {
// 		const diceRoll = Math.trunc(Math.random() * sizeOfDice) + 1;
// 		rolls.push(diceRoll);
// 		rollTotal += diceRoll;
// 	}

// 	return `{\n\trolls: [${rolls.join(', ')}],\n\ttotal: ${rollTotal},\n}`;
// }

// console.log(roll('3d20'));
// console.log(roll('5d6'));
