// Generics in TS
//syntax: function functionName<T>(arg: T): T { ... }
function identity(arg) {
    return arg;
}
let output1 = identity("Hello, TypeScript!");
let output2 = identity(42);
// Generic function
//syntax: function functionName<T extends { length: number }>(arg: T): number { ... }
function getLength(arg) {
    return arg.length;
}
let length1 = getLength("Hello, TypeScript!");
let length2 = getLength([1, 2, 3, 4, 5]);
//Generic with arrarys
//syntax: function functionName<T>(arr: T[]): T | undefined { ... }
function getFirstElement(arr) {
    return arr[0];
}
let firstElement1 = getFirstElement(["apple", "banana", "cherry"]);
let firstElement2 = getFirstElement([1, 2, 3, 4, 5]);
// need a oputput of type GenericIdentityFn<number>
//syntax: let myIdentity: GenericIdentityFn<number> = identity;
let myIdentity = identity;
export {};
