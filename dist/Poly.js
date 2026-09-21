//Static Polymorphism (Compile-time / Method Overloading)
//Multiple type signatures are defined for the same function name
//syntax: function add(a: number, b: number): number; function add(a: string, b: string): string; function add(a: any, b: any): any { ... }
console.log("\n--- Static Polymorphism ---");
class Cal {
    add(a, b) {
        return a + b;
    }
}
const calc = new Cal();
console.log("Static (number):", calc.add(45, 55));
console.log("Static (string):", calc.add("Type", "Script"));
//Dynamic Polymorphism (Run-time / Method Overriding)
//Dynamic polymorphism is achieved when a child class overrides a method inherited from a parent class.
//The method executed depends on the actual object created at runtime.
console.log("\n--- Dynamic Polymorphism ---");
class Animal {
    makeSound() {
        console.log("Generic sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Dog: Bow!Bow!Bow!Bow!");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Cat: Meow!Meow!Meow!Meow!");
    }
}
const pets = [new Dog(), new Cat()];
pets.forEach((pet) => {
    pet.makeSound();
});
export {};
