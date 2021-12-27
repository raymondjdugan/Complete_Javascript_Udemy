'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //Destructruing in function parameters
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicous pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  //ES6 Enhanced object literals
  openingHours,
};

// Array Destructuring
// Instead of this
// const arr = [2, 3, 4];
// const a = [0];
// const b = [1];
// const c = [2];

// We can this
// const [x, y, z] = arr; //This assigns the indexes to x, y and z as variables

// let [main, secondary] = restaurant.categories; //This will grab the first and second index of the array
// console.log(main, secondary);
// const [first, , third] = restaurant.categories; //This will grab the first and third index of the array

//Old way of switching values of indexes
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//Switches the values in the indexes of an array using destructuring
// [main, secondary] = [secondary, main];

//Recieve 2 return values from the order function
// const [starter, mainCourse] = restaurant.order(2, 0);

//Nested Destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//Default values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);

//Calling the function orderDelivery with object arguments
//This defines all of the agurments passed in to the function
// restaurant.orderDelivery({
//   time: '22:38',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

//This defines only the address and starterIndex. The other arguments are defined in the defaults of the function.
// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 2,
// });
//Object Destructuring
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//This assigns the object methods to different names for the stored variables
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

//Setting default values for object destructuring
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//Mutating varibles in object destructuring
// let a = 111;
// let b = 119;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

//Destructuring nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

//The SPREAD OPERATOR IS ... (three dots)
//The Spread operator can work on all iterables
//Iterables in JS are arrays, strings, maps and sets. NOT objects

// Creating a new array out of anther array without spread operator
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

//Creating new array from an old array with the spread operator
// const newArr = [1, 2, ...arr];
// console.log(newArr);

//Can alsoget all of the elements from an array with the spread operator
//This does not just log the elements but the values of the indecies as if being looped over
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

//Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

//Join 2 or more arrays
// const wholeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(wholeMenu);

//Use with string
// const str = 'Jonas';
// const lettersFromStr = [...str, ' ', 'S.'];
// console.log(lettersFromStr);
// console.log(...str);

//Use with functions (orderPasta function from above)
// const ingredients = [
//   prompt("Let's make pasta!\n Ingredient 1:"),
//   prompt("Let's make pasta!\n Ingredient 2:"),
//   prompt("Let's make pasta!\n Ingredient 3:"),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

//Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy);

//Rest pattern is also ... (three dots) but does the oppisite of the spread operator
//Spread because it is on the right hand side of the assignment operator
// const arr = [1, 2, ...[3, 4]];

//This is the rest syntax because it is on the left side of the assignment operator
// const [a, b, ...other] = [1, 2, 3, 4, 5];
// console.log(a, b, other);

// const [pizza, risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

//Rest syntax with objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

//Rest with functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

//Logical Operators
//Use any data type, return any data type and short-circuting

//OR operand will short circut when the first operand is a truthy value
//If the first operand is truthy, the other operand will not be looked at
// console.log(3 || 'Jonas'); //Will come back as 3
// console.log('' || 'Jonas'); //Will come back as Jonas
// console.log(true || 0); //Will come back as true
// console.log(undefined || null); //Will come back as null

// console.log('------OR-----');
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
// //Same as
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

//AND operator short circuts when the first operand is a falsy value
//If the first operand is falsey, the other operand will not be looked at
// console.log('------AND-----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

//Nullish Coalescing Operator
//Works with Nullish Types: null and undefined (NOT 0 or "")
// restaurant.numGuests = 0;
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// const correctGuests = restaurant.numGuests ?? 10;
// console.log(correctGuests);

//Looping Arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//The for-of Loop
//Can also use the break and continue declarations
//For of getting the element
// for (const item of menu) console.log(item);

//Getting the index
// for (const item of menu.entries()) {
//   console.log(item);
// }

// console.log(...menu.entries());

// for (const [i, el] of menu.entries()) {
//   console.log(`${i}: ${el}`);
// }

//Enhanced Object Literals
//Can create an object and insert it into another object with using just the name of the object
// const obj1 = {}
// const obj2 = {
//   //Insert obj1 here
//   obj1,
// }

//Old way of creating methods in object literals
// const obj1 = {
//   functionName: function(){
//     return 'Something'
//   },
// }

//New way in ES6
// const obj2 = {
//   functionName(){
//     return 'Something'
//   },
// }

//Optional Chaining
// console.log(restaurant.openingHours.mon.open);

//Sets
//Sets contains not indexes or retrieving values
//Passing array into a set
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);
//Strings are iterables as well
// console.log(new Set('Jonas'));
//Getting the size of the set
// console.log(ordersSet.size);
//Checking to see if an element is in a set
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('bread'));
//Adding to a set
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// console.log(ordersSet);
//Removing from a set
// ordersSet.delete('Risotto');
// console.log(ordersSet);
//Delete all of the elements of the set
// ordersSet.clear();
//Iterarting through sets
// for (const order of ordersSet) console.log(order);

// //Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(staff).size);

//Maps - Map values to keys
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisob, Portugal');

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are close');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();
// console.log(rest.size);

// rest.set(document.querySelector('h1'), 'Heading');

// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest);
// console.log(rest.get(arr));

// const question = new Map([
//   ['question', 'What is the best programming language in the world'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

//Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer?'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

//Convert map to array
// console.log([...question]);

//Working with Strings - Part 1
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const airline = 'TAP Air Portugal';
// let plane = 'A320';

//Grabbing the letter of the string at the index
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

//Finding string length
// console.log(airline.length);
// console.log('B737'.length);

//Finding index at certian parameters
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// //Returning the string with a portion deleted
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -2));

//Example
// const checkMiddleSeat = function (seat) {
//B and E are middle seats
//   seat = seat.slice(-1);
//   if (seat === 'B' || seat === 'E') console.log('You got the middle seat');
//   else console.log('You got lucky!');
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

//Changing the case of the string
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

//Fix capitalization in a name
// const passenger = 'jOnAS'; //Should look like Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

//function of the above
// const correctNameCapitalization = function (wrongName) {
//   wrongName = wrongName.toLowerCase();
//   return wrongName[0].toUpperCase() + wrongName.slice(1);
// };

// console.log(correctNameCapitalization('rAy'));

//Comparing Emails Example
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLocaleLowerCase();
// const trimmedEmail = lowerEmail.trim();

// const normalizedEmail = function (wrongEmail) {
//   return wrongEmail.toLowerCase().trim();
// };

// console.log(normalizedEmail(loginEmail));

//Replacing parts of strings
// const priceGB = '288,97';
// const priceUS = priceGB.replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to the boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate')); //Will only replace the first occurance
// console.log(announcement.replaceAll('door', 'gate')); //Will replace all occurances
// console.log(announcement.replace(/door/g, 'gate')); //Regular Expression

//Booleans
//the includes method is case sensitive
// plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Airb'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// }

//Practive Exercise
// const checkBaggage = function (items) {
//   items = items.toLowerCase();
//   if (items.includes('knife') || items.includes('gun')) {
//     console.log('You are not allowed on board');
//   } else {
//     console.log('You are allowed on board');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// //Split method
// console.log('a+very+nice+string'.split('+'));
// console.log('Raymond Dugan'.split(' '));

// const [firstName, lastName] = 'Raymond Dugan'.split(' ');
// console.log(firstName);
// console.log(lastName);

//Join Method

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const passenger2 = 'jessica ann smith davis';
// const capitalizeName = function (name) {
//   name = name.split(' ');
//   const namesUpper = [];

//   for (const n of name) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName(passenger2);
// capitalizeName('raymond dugan');

//Padding a string
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(38, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };
// console.log(maskCreditCard(12332112354658456));
// console.log(maskCreditCard('123454658546312'));

//Repeat Method
// const message2 = 'Bad Weather... All Depatures Delayed ....';
// console.log(message2.repeat(5));
