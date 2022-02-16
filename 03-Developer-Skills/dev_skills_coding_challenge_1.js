(function () {
  'use strict';
  // 1.Loop through array
  // 2.Print array in sequence
  // 3.Loop through the days
  // 4.Print the days in order with the index of the array

  const temperatureArrayOne = [17, 21, 23];
  const temperatureArrayTwo = [12, 5, -5, 0, 4];
  function printForcast(tempArr) {
    let str = '';
    for (let i = 0; i < tempArr.length; i++) {
      str = str + `${tempArr[i]}ºC in ${i + 1} days...`;
    }
    console.log(str);
  }

  printForcast(temperatureArrayOne);
  printForcast(temperatureArrayTwo);
})();
