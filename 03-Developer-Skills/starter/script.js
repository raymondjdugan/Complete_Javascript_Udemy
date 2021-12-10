// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//////////////////////////////////////////////////////////////////////////
/////////////////////////  PROBLEM SOLVING ///////////////////////////////
/////////////////////////////////////////////////////////////////////////

//Problem 1
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understading the problem
// -What is temperature amplitede? Answer: Difference between highst and lowest temp.
// -How to compute max and min temps?
// -What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// -How to ignore error?
// -Find max value of the array
// -Find min value of the array
// -Subtract min from max and return it.

// const calcTempAmplitude = function (temps) {
//   let max = temps[0]; // The first element of the array is the MAX value
//   let min = temps[0]; // The first element of the array is the MAX value
//   //Loop through the array
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i]; // Set variable for temps at current position
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp; //check if the current index of the array is greater than the max temp. If so the replace max with the current index value.
//     if (curTemp < min) min = curTemp; //check if the current index of the array is less than the min temp. If so the replace min with the current index value.
//   }
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// Problem 2:
// Function should now receive two arrays of temperatures

// 1) Understanding the problem
// -With 2 arrays, should we implement functionallity twice? NO! Just merge the two arrays.

// 2) Merge 2 arrays

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (t1, t2) {
//   const temps = t1.concat(t2);

//   let max = temps[0]; // The first element of the array is the MAX value
//   let min = temps[0]; // The first element of the array is the MAX value
//   //Loop through the array
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i]; // Set variable for temps at current position
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp; //check if the current index of the array is greater than the max temp. If so the replace max with the current index value.
//     if (curTemp < min) min = curTemp; //check if the current index of the array is less than the min temp. If so the replace min with the current index value.
//   }
//   return max - min;
// };

// const amplitude = calcTempAmplitude([3, 5, 1], [9, 0, 5]);
// console.log(amplitude);

//////////////////////////////////////////////////////////////////////////
/////////////////////////  DEBUGGING ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////