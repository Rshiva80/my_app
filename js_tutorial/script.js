/*Values are stored on the stack

//const name = "John";
const age = 40;
console.log(name, age);

//Value are stored on hemp

const person = {
  name: "Brad",
  age: 30,
};

let newName = name;
newName = "Jonathan";

let newPerson = person;

console.log(name, newName);
console.log(person, newPerson); */

// type casting
let amount = "100";
console.log(amount, typeof amount);
amount = Number(amount);
console.log(amount, typeof amount);

//Convert number to String
let amount1 = 100;
console.log(amount1, typeof amount1);
amount1 = String(amount1);
console.log(amount1, typeof amount1);

//x = 5 + Number("5"); // convert string in number, output is 10
//x = 5 + "6"; // concatenates as 6 is string, output is 56
//x = 5 + null; // null means nothing so output is 5
// x = 5 + true; // true is 1 and false is 0 so output is 6
//x = Number(true); // output is 1 as true is 1
// x = Number(false); //output is 0 as false is 0
// x = 5 + undefined; // NaN

/*let x;
const name = "John";
const age = 30; */

// x = "My name is" + " " + name + " and My age is " + " " + age + "  " +"years old"; old way

// Template Literal

//x = `My name is ${name} and My age is ${age} years old`;
// x = `My cars ${1 + 1} years old`; // ${} is just an expression and we can do whatever we want in it

// const s = "Hello World";
// x = s.split("");

const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 150 + 1);

// Add
const sum = x + y;
console.log(`The sum of ${x} and ${y} is ${sum}`);

// Diff
const diff = x - y;
console.log(`The diff of ${x} and ${y} is ${diff}`);

// Product
const prod1 = x * y;
console.log(`The diff of ${x} and ${y} is ${prod1}`);

// Divide
const prod11 = x / y;
console.log(`The diff of ${x} and ${y} is ${prod11}`);
