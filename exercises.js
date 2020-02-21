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