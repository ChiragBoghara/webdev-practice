function addTwoNumbers(a: number, b: number): number {
    return a + b;
}

let result: number = addTwoNumbers(3, 5);
console.log(result);
function greet(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}

let message1: string = greet("Alice");
let message2: string = greet("Bob", "Hi");

function summation(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
}

let total: number = summation(1, 2, 3, 4, 5);

type MathOperation = (a: number, b: number) => number;

const multiply: MathOperation = (a, b) => a * b;
const divide: MathOperation = (a, b) => a / b;

function powerOf(exponent: number): (base: number) => number {
    return function (base: number): number {
        return Math.pow(base, exponent);
    };
}

const square = powerOf(2);
let res1: number = square(4);

function fetchData(callback: (data: string) => void): void {
    const data: string = "This is the fetched data";
    callback(data);
}

fetchData((result) => {
    console.log(result);
});

const multiplication = (a: number, b: number): number => a * b;

let res2: number = multiply(3, 4);
