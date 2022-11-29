"use strict";

// SLICE
// It deosn't change the array
// let arr = ["a", "b", "c", "d", "e"];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));

//**************************************

// creating a shallow copy

// console.log(arr.slice());
// console.log([...arr]);

//**************************************

// SPLICE
// It mutates the array

// console.log(arr.splice(2));
// console.log(arr.splice(-1));
// console.log(arr);

//**************************************

// REVERSE
// reverse method mutate the original array

// console.log(arr.reverse());

//**************************************

//CONCAT
// let arr1 = ["a", "b", "c", "d", "e"];
// let arr2 = ["f", "g", "h", "i", "j"];
// const letters = arr1.concat(arr2);
// console.log(letters);

//**************************************

//JOIN

// console.log(letters.join(","));

//**************************************
// New at method

// const arr = [233, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

//getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);

//**************************************

// working with foreach loop

// const movements = [7, -14, 21, -28, 35, -42, 49, -56, 63, -70];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log("------------------");

// if using forEach you need a callback function
// (current_element, current_index, whole_array)

// movements.forEach(function (movement, i, array) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} : You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} : You withdrew ${Math.abs(movement)}`);
//   }
// });

//**************************************

// foreach loop for maps and sets

//MAP
// const clubs = new Map([
//   ["England", "Manchester City"],
//   ["Spain", "Real Madrid"],
//   ["Italy", "Juventus"],
//   ["Germany", "Bayern Munich"],
//   ["France", "PSG"],
// ]);

// clubs.forEach((value, key, map) => {
//   console.log(`${key} -> ${value}`);
// });

//SET

// const clubs = new Set([
//   "Manchester City",
//   "Real Madrid",
//   "Juventus",
//   "Bayern Munich",
//   "PSG",
//   "Bayern Munich",
// ]);

// console.log(clubs);

// clubs.forEach((value, _value, map) => {
//   console.log(`${value} -> ${_value}`);
// });

//**************************************

// Data Transformation - map, filter, reduce

// map() -> another method that can be used to loop over arrays
// similar like foreach, but it makes brand new array

//filter() -> which pass certain criteria
// similar like foreach, but it makes brand new array

// reduce() -> reduces all array eleemt down to one single value.
// snowball effect

//MAP

const movements = [7, -14, 21, -28, 35, -42, 49, -56, 63, -70];

const euroToUsd = 1.1;
const movementsUSD = movements.map((mov) => {
  return mov * euroToUsd;
});
console.log(movements);
console.log(movementsUSD);

// using same using for of loop

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * euroToUsd);
}
console.log(movementsUSDfor);
