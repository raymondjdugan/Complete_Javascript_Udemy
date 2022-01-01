'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovments = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance}€`;
};

const calcDisplaySummary = function (acc) {
  //Calculating the deposits
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  //Calculating the withdrawals
  const withdrawals = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + Math.abs(mov), 0);
  labelSumOut.textContent = `${withdrawals}€`;
  //Calculating interest
  const interest = acc.movements
    .filter(deposit => deposit > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name.at(0))
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (account) {
  //Display movements
  displayMovments(account.movements);

  //Display balance
  calcDisplayBalance(account);

  //Display summary
  calcDisplaySummary(account);
};

//Event Handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

//Transfer Money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

//Loan feature
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

//Sort
let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovments(currentAccount.movements, !sorted);
  sorted = !sorted;
});

//Deleting accounts
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    //Finding the index of the account to be deleted from the accounts array
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    //Deleting the account
    accounts.splice(index, 1);

    //Hiding the UI
    containerApp.style.opacity = 0;
  }

  //Clearing the fields
  inputCloseUsername.value = inputClosePin.value = '';
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

//Slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));

//Splice
// console.log(arr.splice(2));
// console.log(arr.reverse());

//At Method
// console.log(arr.at(0));
// console.log(arr.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }
// The value, index and array must be accessed in this order
// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

//Map - can be used to loop an array
//This will create a brand new array based on the original array
//For each iteration it will apply a callback function

//Filter - filters the original array from a certian condition

//Reduce - reduces the array to a single value

//Find Method
// Retrieve on element of an array based on a condition
//Needs a callback function that returns a boolean
// const firstWithdrawal = account1.movements.find(mov => mov < 0);
// console.log(account1.movements);
// console.log(firstWithdrawal);

// const account = accounts.find(acc => (acc.owner = 'Jessica Davis'));
// console.log(account1);

//findindex method
//Returns the index of the condition and not the value

//Some Method: if any of the elements satisfies the condition set array.some(param => condition)

//Every Method - if every element satisfies the conditions set
//array.every(mov => condition)

//Seperate callback
// const deposit = mov => mov > 0;
//array.some(deposit);

//Flat Method - No callback function
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());
//The () will determine how deep to flatten the array: Default is 1
// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arr.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);

//FlatMap Method - combines the map and the flat methods
//Cannot change how deep the method goes. Only 1 level.
// const overallBalance = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

//Sorting Arrays - sort will mutate the original array
//The sort method will also convert to string then sort

//Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());

//Numbers
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

//Acending
// console.log(
//   movements.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//   })
// );

//Acending Refactored
// movements.sort((a, b) => a - b);
// console.log(movements);
//Decending
// console.log(
//   movements.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//   })
// );

//Decending Refactored
// movements.sort((a, b) => b - a);
// console.log(movements);

//Progamatically create and fill arrays
//array.fill()
//Array.from(length: [#], () => condition)

//Summary
// Mutate the original array
// Add to the original array: .push() and .unshift()
// Remove from the original array: .pop(), .shift() and .splice()
// Others: .reverse(), .sort() and .fill()

// A New Array:
// Computed from original: .map()
// Filter using condition: filter()
// Portion of the original: .slice()
// Adding original to another: .concat()
// Flattening the original: flat() and flatMap()

// An Array Index
// Based on value: .indexOf()
// Based on test condition: .findIndex()

// An Array Element
//Based on test condition: .find()

// Know if an Array includes
// Based on value: .includes()
// Based on test condition: .some() and .every()

// A new string
// Based on seperator string: .join()

// To transform to value
// Based on accumulator: .reduce()

// To just loop the array
// Based on callback: .forEach()
