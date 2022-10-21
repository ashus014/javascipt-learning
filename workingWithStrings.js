console.log("Hello World");

const airline = "TAP Air Portugal";
const plane = "A320";
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.slice(4));
console.log(airline.slice(4, 9));
console.log(airline.slice(0, airline.indexOf(" ")));

const checkMiddleSeat = function (seat) {
  // B & E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log(`With ${seat} you have a middle seat 😬`);
  } else {
    console.log("You got lucky");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("13C");
checkMiddleSeat("3E");

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fixing capitalization in name
const passenger = "anuKriTi";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing emails
const email = "singh@gmail.com";
const loginEmail = "   Singh@Gmail.Com   ";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

if (email === normalizedEmail) {
  console.log("emails matched 🥳");
}

const princeGB = "288,97£";
const princeUS = princeGB.replace("£", "$").replace(",", ".");
console.log(princeUS);

const announcement =
  "All passangers please come to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));

// using RegEx to do the above operation
console.log(announcement.replace(/door/g, "gate"));

// Booleans
const aeroplane = "Airbus A320neo";
console.log(aeroplane.includes("A320"));
console.log(aeroplane.includes("Boeing"));
console.log(aeroplane.startsWith("Air"));

// Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed on board 😬");
  } else {
    console.log("Welcome aboard!!!");
  }
};

checkBaggage("I have a Laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

console.log("a+very+nice+string".split("+"));
console.log("ASHU SINGH".split(" "));

const [firstName, lastName] = "Ashu Singh".split(" ");
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

// Function to capitalize the first letter
const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");

// 1 Possible Solution

// let to_cap = true;
// const target = "ashu singh kushwaha";
// let result = "";

// for (let element of target) {
//   if (element != " ") {
//     if (to_cap) result += element.toUpperCase();
//     else result += element;
//     to_cap = false;
//   } else if (element == " ") {
//     result += " ";
//     to_cap = true;
//   }
// }

// Padding a String
