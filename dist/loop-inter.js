// For used for count the numbers
//syntax: for (initialization; condition; increment/decrement) { ... }
console.log("--- for ---");
const scores = [90, 85, 78];
for (let i = 0; i < scores.length; i++) {
    console.log(`Index ${i}: ${scores[i]}`);
}
// For....of used for iterating directly over array elements, strings, maps, sets.
//syntax: for (const element of iterable) { ... }
console.log("\n--- for...of ---");
const Tools = ['git', 'VS code', 'claude'];
for (const n of Tools) {
    console.log(n);
}
// For....in used for Iterating Keys/Properties
//syntax: for (const key in object) { ... }
console.log("\n--- for...in ---");
const config = { name: 'Hari', age: 21, verify: true };
for (const key in config) {
    console.log(`${key}: ${config[key]}`);
}
//ForEach used for automatic type inference for the current element and index.
//syntax: array.forEach((element, index) => { ... });
console.log("\n--- forEach ---");
const fruits = ['apple', 'banana', 'mango'];
fruits.forEach((element, index) => {
    console.log(`Index ${index}: ${element}`);
});
//While used for runs code repeatedly as long as a specified condition evaluates to true.
//syntax: while (condition) { ... }
console.log("\n--- while ---");
let c = 0;
while (c < 3) {
    console.log(`Current count: ${c}`);
    c++;
}
//do...while run at least once before evaluating the condition.
//syntax: do { ... } while (condition);
console.log("\n--- do...while ---");
let count = 0;
do {
    console.log(`Count: ${count}`);
    count++;
} while (count < 3);
export {};
