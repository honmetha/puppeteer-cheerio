// Ex1
let obj = {};
let key;
let value;

while (key !== "stop" || value !== "stop") {
  key = prompt("Enter key:");
  if (key === "stop") {
    break;
  }
  value = prompt("Enter value:");
  if (value === "stop") {
    break;
  }
  console.log(`${key} + ${value}`);
  obj[key] = value;
}

console.log(obj);

// Ex2
let student = {};
let firstName = "first name";
let lastName = "last name";
let age = "age";
let height = "height";

student[firstName] = "Metha";
student[lastName] = "Jenvitayaroj";
student[age] = 29;
student[height] = 175;

console.log(student);

// Ex3
let basket = {};

while (true) {
  let fruit = prompt("Enter fruit:");
  if (fruit === "stop") {
    break;
  }
  let amount = prompt("Enter amount:");
  if (amount === "stop") {
    break;
  }
  console.log(`${fruit} + ${amount}`);
  if (amount > 1) {
    basket[fruit + "s"] = parseInt(amount);
  } else {
    basket[fruit] = parseInt(amount);
  }
}

console.log(basket);