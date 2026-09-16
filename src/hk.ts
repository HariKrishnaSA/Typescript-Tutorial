const num: number []=[1,2,2,3,4,4,5];
const uniqueNum: number[] = [...new Set(num)];
console.log(uniqueNum);

const message: string = "I love India";
const noSpaces: string = message.replace(/\s+/g, "");
console.log(noSpaces);