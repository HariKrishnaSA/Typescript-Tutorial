// Generics in TS
function identity(arg) {
    return arg;
}
let output1 = identity("Hello, TypeScript!");
let output2 = identity(42);
// Generic function
function getLength(arg) {
    return arg.length;
}
let length1 = getLength("Hello, TypeScript!");
let length2 = getLength([1, 2, 3, 4, 5]);
//Generic with arrarys
function getFirstElement(arr) {
    return arr[0];
}
let firstElement1 = getFirstElement(["apple", "banana", "cherry"]);
let firstElement2 = getFirstElement([1, 2, 3, 4, 5]);
// need a oputput of type GenericIdentityFn<number>
let myIdentity = identity;
export {};
