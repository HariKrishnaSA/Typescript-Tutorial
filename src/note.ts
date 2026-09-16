import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

interface Hari {
  name: string;
  age: number;
  role: string;
  verification: boolean;
  id: string;
}

async function getUserInput(): Promise<Hari> {
  const rl = readline.createInterface({ input, output });

  try {
    const name = await rl.question("Enter your name: ");
    const ageInput = await rl.question("Enter your age: ");
    const role = await rl.question("Enter your role: ");
    const verificationInput = await rl.question("Are you verified? (yes/no or true/false): ");
    const id = await rl.question("Enter your ID: ");

    const cleanVerification = verificationInput.trim().toLowerCase(); 
    const up: Hari = {
      name: name.trim(),
      age: Number(ageInput),
      role: role.trim(),
      verification: cleanVerification === "true" || cleanVerification === "yes" || cleanVerification === "y",
      id: id.trim(),
    };

    console.log("\nProfile created successfully:");
    console.log(up);

    return up;
  } finally {
    rl.close();
  }
}

getUserInput();