
function square(num) {
  return num * num;
}
console.log("Square of 5:", square(5)); 

function formatString(str, formatter) {
  return formatter(str);
}

const toUpperCase = (s) => s.toUpperCase();
const toLowerCase = (s) => s.toLowerCase();

console.log("Formatted (upper):", formatString("hello", toUpperCase)); 
console.log("Formatted (lower):", formatString("WORLD", toLowerCase)); 

const numbers = [1, 2, 3, 4, 5, 6];

const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);


const evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens); 

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum); 


function makeGreeter(greeting) {
  return function(name) {
    console.log(`${greeting}, ${name}!`);
  };
}

const greetHello = makeGreeter("Hello");
const greetWelcome = makeGreeter("Welcome");

greetHello("Alice");   
greetWelcome("Bob");  
