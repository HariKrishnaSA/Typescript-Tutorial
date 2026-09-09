//Abstraction hides internal implementation details and shows only the essential features to the outside world.
class sq {
}
class Square extends sq {
    side = 4;
    area() {
        console.log("Area:", this.side * this.side);
    }
}
const box = new Square();
box.area();
export {};
