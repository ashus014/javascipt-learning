"use strict";

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 33) {
  // Below is the ES5 way for short circuiting
  //   numPassengers = numPassengers || 1;
  //   price = price || 33;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("Indigo 6E134");
