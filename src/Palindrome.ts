import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

// 1. Palindrome check function (works for text and numbers)
function isPalindrome(val: string): boolean {
  const clean = val.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === clean.split("").reverse().join("");
}

// 2. Get input from the user in the terminal
async function run() {
  const rl = readline.createInterface({ input, output });

  const userInput = await rl.question("Enter any word or number: ");

  if (isPalindrome(userInput)) {
    console.log(` Result: "${userInput}" is a palindrome!`);
  } else {
    console.log(` Result: "${userInput}" is NOT a palindrome.`);
  }

  rl.close();
}

run();