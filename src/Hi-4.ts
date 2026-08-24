// Generics in TS
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("Hello, TypeScript!");
let output2 = identity<number>(42);
 
// Generic function
function getLength<T extends { length: number }>(arg: T): number {
    return arg.length;
}

let length1 = getLength("Hello, TypeScript!");
let length2 = getLength([1, 2, 3, 4, 5]);

//Generic with arrarys
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

let firstElement1 = getFirstElement(["apple", "banana", "cherry"]);
let firstElement2 = getFirstElement([1, 2, 3, 4, 5]);

// Generic interface
interface GenericIdentityFn<T> {
    (arg: T): T;
}   

// need a oputput of type GenericIdentityFn<number>
let myIdentity: GenericIdentityFn<number> = identity;