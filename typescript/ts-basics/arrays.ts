let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[];
fruits = ["Apple", "Banana", "Orange"];

let weekdays: ("Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday")[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

numbers.push(6);

let lastNumber: number | undefined = numbers.pop();

let squaredNumbers: number[] = numbers.map(num => num * num);

interface Person {
    name: string;
    age: number;
}

let students: Person[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
];

let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let readonlyArray: readonly string[] = ["apple", "banana", "orange"];
let evenNumbers: number[] = numbers.filter(num => num % 2 === 0);
let sum: number = numbers.reduce((acc, num) => acc + num, 0);
