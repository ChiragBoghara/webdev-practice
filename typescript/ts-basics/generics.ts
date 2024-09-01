function identity<T>(arg: T): T {
    return arg;
}

let result1: number = identity(123);
let result2: string = identity("hello");

function reverse<T>(array: T[]): T[] {
    return array.reverse();
}

let reversedNumbers: number[] = reverse<number>([1, 2, 3]);
let reversedStrings: string[] = reverse<string>(["apple", "banana", "orange"]);

interface Box<T> {
    value: T;
}

let numberBox: Box<number> = { value: 42 };
let stringBox: Box<string> = { value: "hello" };

class Pair<T, U> {
    constructor(public first: T, public second: U) { }
}

let numberAndString: Pair<number, string> = new Pair(42, "hello");


function processArray<T>(array: T[], callback: (item: T) => void): void {
    array.forEach(callback);
}

processArray([1, 2, 3], (item) => console.log(item * 2));
processArray(["a", "b", "c"], (item) => console.log(item.toUpperCase()));

