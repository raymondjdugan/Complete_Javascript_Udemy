'use strict';

// TEST DATA: Test for bill values 275, 40 and 430

// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);



function calcTip(bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 155, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const totalBill = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totalBill);