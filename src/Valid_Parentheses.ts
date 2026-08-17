import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

function isValid(s: string): boolean {
  const stack: string[] = [];
  const pairs: Record<string, string> = { ")": "(", "}": "{", "]": "[" };

  for (const char of s) {
    if (char in pairs) {
      if (stack.pop() !== pairs[char]) return false;
    } else if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

async function run() {
  const rl = readline.createInterface({ input, output });

  const inputStr = await rl.question("Enter a bracket string (e.g., '{[()]}'): ");
  const result = isValid(inputStr);

  console.log(`Result: "${inputStr}" is ${result ? "VALID" : "INVALID"}`);

  rl.close();
}

run();