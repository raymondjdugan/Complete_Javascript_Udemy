'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//Object Destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//This assigns the object methods to different names for the stored variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Setting default values for object destructuring
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating varibles in object destructuring
let a = 111;
let b = 119;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Destructuring nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
//Array Destructuring
//Instead of this
// const arr = [2, 3, 4];
// const a = [0];
// const b = [1];
// const c = [2];

//We can this
// const [x, y, z] = arr; //This assigns the indexes to x, y and z as variables

// let [main, secondary] = restaurant.categories; //This will grab the first and second index of the array
// console.log(main, secondary);
// // const [first, , third] = restaurant.categories; //This will grab the first and third index of the array

// //Old way of switching values of indexes
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// //Switches the values in the indexes of an array using destructuring
// [main, secondary] = [secondary, main];

// //Recieve 2 return values from the order function
// const [starter, mainCourse] = restaurant.order(2, 0);

// //Nested Destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);
