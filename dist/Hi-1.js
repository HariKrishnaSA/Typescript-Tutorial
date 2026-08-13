let studentName = "Hari";
let score = 95;
let hasPassed = true;
let colors = ["BMW", "HONDA", "SUPRAAA"];
let user = {
    name: "Hari",
    age: 20,
};
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
let id = "23BAM060";
id = "7276";
console.log(`Student: ${studentName}, Score: ${score}, Passed: ${hasPassed}`);
console.log(`Colors: ${colors.join(", ")}`);
console.log(`User: ${user.name} (${user.age} years old)`);
console.log(`Sum: 5 + 10 = ${add(5, 10)}`);
console.log(`ID: ${id}`);
export {};
