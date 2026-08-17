import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
async function addTwoNumbers() {
    const rl = readline.createInterface({ input, output });
    const num1 = Number(await rl.question("Enter first number: "));
    const num2 = Number(await rl.question("Enter second number: "));
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Error: Please enter valid numeric values.");
    }
    else {
        const sum = num1 + num2;
        console.log(`Result: ${num1} + ${num2} = ${sum}`);
    }
    rl.close();
}
addTwoNumbers();
