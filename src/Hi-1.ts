let studentName: string = "Hari";
let score: number = 95;
let hasPassed: boolean = true;
let car: string[] = ["BMW", "HONDA", "SUPRAAA"];
let user: { name: string; age: number } = {
  name: "Hari",
  age: 20,
};
function add(a: number, b: number): number {
  return a + b;
}
function subtract(a: number, b: number): number {
  return a - b;
}
function multiply(a: number, b: number): number {
  return a * b;
}
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

let id: string | number = "23BAM060"; 
id = "7276"; 

console.log(`Student: ${studentName}, Score: ${score}, Passed: ${hasPassed}`);
console.log(`Cars: ${car.join(", ")}`);
console.log(`User: ${user.name} (${user.age} years old)`);
console.log(`Sum: 5 + 10 = ${add(5, 10)}`);
console.log(`ID: ${id}`);