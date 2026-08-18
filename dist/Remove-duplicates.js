import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
/**
 * Removes duplicates from a sorted array in-place.
 * @param nums - Sorted array of numbers
 * @returns The number of unique elements (k)
 */
function removeDuplicates(nums) {
    if (nums.length === 0)
        return 0;
    let insertIndex = 1;
    for (let i = 1; i < nums.length; i++) {
        const current = nums[i];
        const previous = nums[i - 1];
        // Explicit undefined checks satisfy strict `noUncheckedIndexedAccess`
        if (current !== undefined && previous !== undefined && current !== previous) {
            nums[insertIndex] = current;
            insertIndex++;
        }
    }
    return insertIndex;
}
async function main() {
    const rl = readline.createInterface({ input, output });
    try {
        const rawInput = await rl.question('Enter sorted numbers (separated by spaces or commas, e.g., 0 0 1 1 1 2 2 3 3 4): ');
        // Parse and filter numeric values
        const nums = rawInput
            .trim()
            .split(/[\s,]+/)
            .map(Number)
            .filter((n) => !isNaN(n));
        if (nums.length === 0) {
            console.log('No valid numbers entered.');
            return;
        }
        // Ensure array is sorted
        nums.sort((a, b) => a - b);
        console.log(`\nInput array: [${nums.join(', ')}]`);
        const k = removeDuplicates(nums);
        console.log(`\nUnique count (k): ${k}`);
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
