'use strict';

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totalBill = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300? bill * 0.15 : bill * 0.2;
}

for (let i=0; i<bills.length; i++) {
    let tip = calcTip(bills[i]);
    tips.push(tip);
    totalBill.push(tip + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totalBill);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totalBill));
console.log(calcAverage(tips));


