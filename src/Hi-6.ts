//Abstraction hides internal implementation details and shows only the essential features to the outside world.
//syntax: abstract class Shape { abstract area(): void; }
abstract class sq {
  abstract area(): void; 
}

class Square extends sq {
  side: number = 4;

  area(): void {
    console.log("Area:", this.side * this.side);
  }
}

const box = new Square();
box.area(); 


