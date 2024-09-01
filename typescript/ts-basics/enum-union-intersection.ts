enum Color {
    Red,
    Green,
    Blue,
}

let myColor: Color = Color.Green;
console.log(myColor);

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

let myDirection: Direction = Direction.Up;
console.log(myDirection);

let value: string | number;
value = "hello";
console.log(value.length);

value = 42;
// console.log(value.length); 

function displayData(data: string | number): void {
    console.log(data);
}

interface Car {
    brand: string;
    model: string;
}

interface Electric {
    electricMotor: boolean;
}

type ElectricCar = Car & Electric;

let myElectricCar: ElectricCar = {
    brand: "Tesla",
    model: "Model S",
    electricMotor: true,
};



