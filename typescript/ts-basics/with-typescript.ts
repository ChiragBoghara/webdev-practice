let age: number;

age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 32,
};

let people: {
  name: string;
  age: number;
}[];

people = [{
  name: "Max",
  age: 32
}];

type person = {
  name: string;
  age: number;
}

let me: person;
let myfriends: person[];

function add(a: number, b: number): number | string {
  return a + b;
}

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning<number>(demoArray, -1);
const stringArray = insertAtBeginning<string>(["a", "b", "c"], "d");

stringArray[0].split("");