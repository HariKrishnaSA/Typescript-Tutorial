const num = [1, 2, 2, 3, 4, 4, 5];
const uniqueNum = [...new Set(num)];
console.log(uniqueNum);
const message = "I love India";
const noSpaces = message.replace(/\s+/g, "");
console.log(noSpaces);
export {};
