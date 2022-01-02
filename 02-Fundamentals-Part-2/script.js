'use strict';

//////////////////////////////////////////////////////////////////////
///////////////////// Activating Strict Mode /////////////////////////
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


///////////////////////////////////////////////////////////////////////////
///////////////////////////// Functions ///////////////////////////////////
function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


///////////////////////////////////////////////////////////////////////////
///////////////// Function Declarations vs. Expressions ///////////////////

// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


//////////////////////////////////////////////////////////////////////////
//////////////////////// Arrow functions /////////////////////////////////

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));


////////////////////////////////////////////////////////////////////
///////////////////// Functions Calling Other Functions/////////////
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));


////////////////////////////////////////////////////////////////////////////
///////////////////////// Reviewing Functions //////////////////////////////
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////Arrays////////////////////////////////////////
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
friends = ['Bob', 'Alice'] //Cannot do if the array is declared as a const

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


//////////////////////////////////////////////////////////////////////////////
///////////////////////Basic Array Operations (Methods)///////////////////////
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}


//////////////////////////////////////////////////////////////////////////////
/////////////////// Advanced Array Operations (Methods) ////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

Slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));

Splice
console.log(arr.splice(2));
console.log(arr.reverse());

At Method
console.log(arr.at(0));
console.log(arr.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
The value, index and array must be accessed in this order
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

Map - can be used to loop an array
This will create a brand new array based on the original array
For each iteration it will apply a callback function

Filter - filters the original array from a certian condition

Reduce - reduces the array to a single value

Find Method
Retrieve on element of an array based on a condition
Needs a callback function that returns a boolean
const firstWithdrawal = account1.movements.find(mov => mov < 0);
console.log(account1.movements);
console.log(firstWithdrawal);

const account = accounts.find(acc => (acc.owner = 'Jessica Davis'));
console.log(account1);

findindex method
Returns the index of the condition and not the value

Some Method: if any of the elements satisfies the condition set array.some(param => condition)

Every Method - if every element satisfies the conditions set
array.every(mov => condition)

Seperate callback
const deposit = mov => mov > 0;
array.some(deposit);

Flat Method - No callback function
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
The () will determine how deep to flatten the array: Default is 1
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arr.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);

FlatMap Method - combines the map and the flat methods
Cannot change how deep the method goes. Only 1 level.
const overallBalance = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

Sorting Arrays - sort will mutate the original array
The sort method will also convert to string then sort

Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

Acending
console.log(
  movements.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
  })
);

Acending Refactored
movements.sort((a, b) => a - b);
console.log(movements);
Decending
console.log(
  movements.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
  })
);

Decending Refactored
movements.sort((a, b) => b - a);
console.log(movements);

Progamatically create and fill arrays
array.fill()
Array.from(length: [#], () => condition)

Summary
Mutate the original array
Add to the original array: .push() and .unshift()
Remove from the original array: .pop(), .shift() and .splice()
Others: .reverse(), .sort() and .fill()

A New Array:
Computed from original: .map()
Filter using condition: filter()
Portion of the original: .slice()
Adding original to another: .concat()
Flattening the original: flat() and flatMap()

An Array Index
Based on value: .indexOf()
Based on test condition: .findIndex()

An Array Element
Based on test condition: .find()

Know if an Array includes
Based on value: .includes()
Based on test condition: .some() and .every()

A new string
Based on seperator string: .join()

To transform to value
Based on accumulator: .reduce()

To just loop the array
Based on callback: .forEach()


/////////////////////////////////////////////////////////////////////////////
////////////////////////////Introduction to Objects//////////////////////////
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};


///////////////////////////////////////
// Dot vs. Bracket Notation
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

console.log(jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


///////////////////////////////////////
// Object Methods

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function (birthYeah) {
    return 2037 - birthYeah;
  }

  calcAge: function () {
    // console.log(this);
    return 2037 - this.birthYeah;
  }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

Challenge
"Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());



///////////////////////////////////////
// Iteration: The for Loop

console.log('Lifting weights repetition 1 🏋️‍♀️');
console.log('Lifting weights repetition 2 🏋️‍♀️');
console.log('Lifting weights repetition 3 🏋️‍♀️');
console.log('Lifting weights repetition 4 🏋️‍♀️');
console.log('Lifting weights repetition 5 🏋️‍♀️');
console.log('Lifting weights repetition 6 🏋️‍♀️');
console.log('Lifting weights repetition 7 🏋️‍♀️');
console.log('Lifting weights repetition 8 🏋️‍♀️');
console.log('Lifting weights repetition 9 🏋️‍♀️');
console.log('Lifting weights repetition 10 🏋️‍♀️');

for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}


///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];

console.log(jonas[0])
console.log(jonas[1])
...
console.log(jonas[4])
jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  Filling types array
  types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue; IF THE TYPE OF THE CURRENT ELEMENT IS NOT A STRING THEN CONTINUE WITH THE LOOP AND SKIP THE OTHER TYPES

  console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break; THIS WILL STOP AT THE FIRST NUMBER FOUND AND END THE LOOP

  console.log(jonas[i], typeof jonas[i]);
}


///////////////////////////////////////
// Looping Backwards and Loops in Loops
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}


///////////////////////////////////////
// The while Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}

