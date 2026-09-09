console.log("--- Conditional Statements ---");
// if,else if, else used for executing code based on conditions.
const score = 45;
if (score >= 90) {
    console.log("Grade: A");
}
else if (score >= 60) {
    console.log("Grade: B");
}
else {
    console.log("Grade: C");
}
console.log("\n--- Nested if ---");
// Nested if statements allow for more complex decision-making by placing one if statement inside another.
const isUser = false;
const isAdmin = true;
if (isUser) {
    console.log("Welcome!");
    if (isAdmin) {
        console.log("Admin privileges granted.");
    }
    else {
        console.log("Standard user access.");
    }
}
else {
    console.log("Access denied.");
}
export {};
