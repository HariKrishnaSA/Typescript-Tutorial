import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
function removeElement(nums, val) {
    let insertIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        if (current !== undefined && current !== val) {
            nums[insertIndex] = current;
            insertIndex++;
        }
    }
    return insertIndex;
}
async function main() {
    const rl = readline.createInterface({ input, output });
    try {
        const arrayInput = await rl.question('Enter numbers (separated by spaces or commas, e.g., 3 2 2 3): ');
        const valInput = await rl.question('Enter the value to remove (val): ');
        const nums = arrayInput
            .trim()
            .split(/[\s,]+/)
            .map(Number)
            .filter((n) => !isNaN(n));
        const val = Number(valInput.trim());
        if (isNaN(val)) {
            console.log('Invalid value to remove.');
            return;
        }
        console.log(`\nOriginal array: [${nums.join(', ')}]`);
        console.log(`Target value to remove: ${val}`);
        const k = removeElement(nums, val);
        console.log(`\nRemaining count (k): ${k}`);
        console.log(`Modified array (first ${k} elements): [${nums.slice(0, k).join(', ')}]`);
        console.log(`Full underlying array: [${nums.join(', ')}]`);
    }
    finally {
        rl.close();
    }
}
main().catch((err) => {
    console.error('An error occurred:', err);
});
