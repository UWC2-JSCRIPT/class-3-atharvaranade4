// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`



// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

class SpaceShip{
    constructor(name, topSpeed){
        this.name = name;
        this.topSpeed = topSpeed;
    }

    accelerate() {
        console.log(`${this.name} moving to ${this.topSpeed}`)
    }
}

const ship1 = new SpaceShip("Lexx", "12000");
ship1.accelerate();
const ship2 = new SpaceShip("Sharp", "19000");
ship2.accelerate();