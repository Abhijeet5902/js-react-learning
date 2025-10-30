// Array Practice
const fruits = ["apple", "banana", "mango"];
fruits.push("orange");

console.log("Fruits:", fruits);
console.log("First fruit:", fruits[0]);

// Using map and filter
const upper = fruits.map(f => f.toUpperCase());
const filtered = fruits.filter(f => f.startsWith("a"));

console.log("Uppercase:", upper);
console.log("Filtered:", filtered);
