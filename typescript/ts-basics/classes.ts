class Dog {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    bark(): string {
        return `Woof, my name is ${this.name}!`;
    }
}

class Employee {
    private age: number;

    constructor(age: number) {
        this.age = age;
    }

    getAge(): number {
        return this.age;
    }
}

let emp: Employee = new Employee(25);
console.log(emp.getAge());

class Circle {
    private _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        if (value >= 0) {
            this._radius = value;
        } else {
            console.error("Radius cannot be negative.");
        }
    }
}

let myCircle: Circle = new Circle(5);
console.log(myCircle.radius);
myCircle.radius = 8;
console.log(myCircle.radius);

class MathOperations {
    static PI: number = 3.14;

    static calculateArea(radius: number): number {
        return this.PI * radius * radius;
    }
}

console.log(MathOperations.calculateArea(4));
abstract class Shape {
    abstract calculateArea(): number;
}

class Circular extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

let circle: Circular = new Circular(5);
console.log(circle.calculateArea());





