// 'use strict';

// function roll(rolled) {
// 	const [timesToRoll, sizeOfDice] = rolled.split('d');
// 	const rolledArray = [];
// 	let rollTotal = 0;
// 	for (let i = 0; i < timesToRoll; i++) {
// 		const diceRoll = Math.trunc(Math.random() * sizeOfDice) + 1;
// 		rolledArray.push(diceRoll);
// 		rollTotal += diceRoll;
// 	}

// 	return {
// 		roll: rolledArray,
// 		total: rollTotal,
// 	};
// }
// console.log(roll('3d6'));

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

// let str = '';
// for (let i = 1; i <= 9; i++) {
// 	str += '\n';
// 	for (let j = 1; j <= i; j++) {
// 		str += i;
// 	}
// 	// console.log(str);
// 	// str = '';
// }
// console.log(str);

// var s = '';
// //First for loop going 1 to 9
// for (let i = 1; i < 10; i++) {
// 	// console.log("this is i " + i)
// 	//Inner loop starting at i and decrementing to 0
// 	//This means i=1 will run once, i=2 will run twice, etc.
// 	for (let j = i; j > 0; j--) {
// 		//Append our current outer loop iteration to the empty string.
// 		s += i;
// 		// console.log("this is j " + j )
// 		// console.log("this is s " + s)
// 	}
// 	//Log the entire completed string
// 	console.log(s);
// 	//Reset the string for next iteration
// 	s = '';
// }

// This is how you get a random number between 50 and 100
// let allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
// The output should be similar to the following:

//     5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones

// let allCones = Math.floor(Math.random() * 50) + 1;
// do {
// 	let conesBought = Math.floor(Math.random() * 5) + 1;
// 	if (conesBought <= allCones) {
// 		console.log(`${conesBought} cones sold`);
// 		allCones -= conesBought;
// 	} else if (conesBought > allCones) {
// 		console.log(
// 			`Cannot sell you ${conesBought} cones, as I only have ${allCones} cones`
// 		);
// 	}
// } while (allCones > 0);
// console.log(`Yay! I sold them all!`);

// 1. Write a function named getFizzBuzz(startingNum) which performs the following actions:
//     If startingNum is divisible by 3,
//     console log "fizz"
// 2. Else, if startingNum is divisible by 5
//    console log "buzz"
// 3. If startingNum is divisible by 3 AND divisible by 5
//      return a string which says "FIZZ BUZZ"
// 4. Thinking about getFizzBuzz(startingNum), let's console log the return value of this function
//      What if getFizzBuzz doesn't return a value (VOID)?
//      How do you want to handle that?