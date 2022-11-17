"use strict";

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 33) {
//   // Below is the ES5 way for short circuiting
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 33;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("Indigo 6E134");

// ***********************************

// How passing arguments works
// Primitives VS Reference types

// const flight = "Indigo 6E-145";
// const ashu = {
//   name: "Ashu Singh",
//   passport: 1234567,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "Indigo 6E-159";
//   passenger.name = "Mr. " + passenger.name;

//   if (passenger.passport === 1234567) {
//     alert("Checked In");
//   } else {
//     alert("Wrong passport");
//   }
// };

// checkIn(flight, ashu);
// console.log(flight, ashu);

// ***********************************

// First Class functions ans higher order functions

// What is higher order functions ?
// Ans. A function that receives another funtion as an
// argument, that returns a new function, or both.

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// higher order function

// const transformer = function (str, fn) {
//   console.log(`Original String : ${str}`);
//   console.log(`Transformed string : ${fn(str)}`);
//   console.log(`Transformed by : ${fn.name}`);
// };

// transformer("Java is the Best", upperFirstWord);
// transformer("Java is the Best", oneWord);

// another higher order function

// const high5 = function () {
//   console.log("👋");
// };

// document.body.addEventListener("click", high5);

// ["Ashu", "Akash", "Anukriti"].forEach(high5);

// functions returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Ashu");
greeterHey("Akash");

greet("Good Afternoon!")("Mr. Bond");

// re-writing above greet function using arrow function
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greet("Good Evening!")("Ethan Hunt");
