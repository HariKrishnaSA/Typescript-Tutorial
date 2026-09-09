// 1. Array (ordered list)
console.log("--- Array ---");
const tools = ["Git", "VS Code"];
tools.push("TypeScript");
console.log("Array:", tools);
console.log("\n--- Tuple ---");
// 2. Tuple (fixed types & positions)
const user = [1, "Hari"];
console.log(`ID: ${user[0]}, Name: ${user[1]}`);
console.log("\n--- Set ---");
// 3. Set (unique values only)
const ids = new Set([10, 20, 20, 30]);
ids.add(40);
console.log("Set size:", ids.size); // 4
console.log("\n--- Map ---");
// 4. Map (key-value pairs)
const roles = new Map();
roles.set("Hari", "Admin");
roles.set("Alex", "Tester");
console.log("Role:", roles.get("Hari"));
console.log("\n--- Typed Object ---");
// 5. Typed Object()
const scores = {
    math: 90,
    science: 85,
};
console.log("Math score:", scores.math);
//Inheritance allows a child class to reuse properties and
//methods from a parent class using the extends keyword and the super call.
// 1. Parent Class (Base)
console.log("\n--- Inheritance ---");
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, I am ${this.name}.`);
    }
}
// 2. Child Class (Derived)
class Employee extends Person {
    role;
    constructor(name, role) {
        super(name);
        this.role = role;
    }
    // Method overriding
    greet() {
        super.greet();
        console.log(`My role is ${this.role}.`);
    }
}
// 3. Execution
const emp = new Employee("Hari", "Tester");
emp.greet();
export {};
