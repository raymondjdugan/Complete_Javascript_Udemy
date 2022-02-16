'use strict';

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   console.log(rows);
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')) {
  const [status, fromState, toState, time] = flight.trim().split(';');
  const output = `${
    status.startsWith('_Delayed') ? '🔴' : ''
  } ${status.replaceAll('_', ' ')} from ${fromState
    .toUpperCase()
    .slice(0, 3)} to ${toState.toUpperCase().slice(0, 3)} (${time.replace(
    ':',
    'h'
  )})`;
  console.log(output.padStart(52));
}
