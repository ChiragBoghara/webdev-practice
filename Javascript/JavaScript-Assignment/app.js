// 1. Write a program that prints ‘Hello World’ to the screen.
console.log("Hello World");

// 2. Write a JavaScript program to get the current date
let date = new Date();
console.log(date.toLocaleDateString());

// 3. Write a program that asks the user for a number n and prints the sum of the numbers 1 to n.
let n = prompt("Enter a number");
let total = 0;
for (let i = 1; i <= Number(n); i++) {
  total += i;
}
console.log(total);

// 4. Write a program that prints the next 20 leap years.

let currentYear = date.getFullYear();
let years = 20;

//using shorted arrow function syntax
const checkIfLeapYear2 = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? true : false;

while (years) {
  if (checkIfLeapYear2(currentYear)) {
    console.log(currentYear);
    years--;
  }
  currentYear++;
}

function checkIfLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

// 5. Write a JavaScript program to find 1st January is a Sunday between 2014 and 2050

for (let year = 2014; year <= 2050; year++) {
  const date = new Date(year, 0, 1);
  if (date.getDay() === 0) {
    console.log(`1st January is a Sunday in the year ${year}`);
  }
}

// 6. Write a JavaScript program to get the website URL

console.log(window.location.origin);
console.log(window.location.href);

// 7. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1

function changePosition1(str) {
  if (str.length <= 1) {
    return str;
  }
  return str.slice(-1) + str.slice(1, -1) + str.slice(0, 1);
}

function changePosition2(str) {
  if (str.length <= 1) {
    return str;
  }
  let first = str[0];
  let last = str[str.length - 1];
  let middle = str.slice(1, str.length - 1);
  return last + middle + first;
}

function changePosition3(str) {
  if (str.length > 1) {
    let firstChar = str.charAt(0);
    let lastChar = str.charAt(str.length - 1);

    let newString = lastChar + str.substring(1, str.length - 1) + firstChar;
    return newString;
  } else {
    console.log("String length must be greater than 1.");
  }
}

console.log(changePosition3("welcome"));

// 8. Write a function that returns the largest element in a list.

const nums = [3, 2, 6, 4, 9, 1];

function findLargest1(nums) {
  return Math.max(...nums);
}

function findLargest2(nums) {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
}

function findLargest3(nums) {
  return nums.reduce((acc, ele) => {
    if (ele > acc) {
      return ele;
    }
    return acc;
  });
}

console.log(findLargest3(nums));

// 9. Write a function that reverses a list, preferably in place.

function reverseList1(list) {
  let i = 0;
  let j = list.length - 1;

  while (i < j) {
    [list[i], list[j]] = [list[j], list[i]];
    i++;
    j--;
  }
  return list;
}

function reverseList2(list) {
  list.reverse();
}
const list4 = [1, 3, 5, 7, 9];
reverseList1(list4);
console.log(list4);

// 10. Write a function that checks whether an element occurs in a list.

const nums2 = [4, 3, 6, 9, 12, 1];

function checkOccurence2(nums, ele) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === ele) {
      return true;
    }
  }
  return false;
}

function checkOccurence1(nums, ele) {
  return nums.includes(ele);
}

function checkOccurence3(nums, element) {
  return nums.indexOf(element) !== -1;
}

console.log(checkOccurence1(nums2, 3));

// 11. Write a function that returns the elements on odd positions in a list.

function getOddPositions(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 !== 0) {
      result.push(nums[i]);
    }
  }
  return result;
}

function getOddPositions2(nums) {
  return nums.filter((ele, index) => index % 2 !== 0);
}

function getOddPositions3(nums) {
  return nums.reduce((acc, ele, index) => {
    if (index % 2 !== 0) {
      acc.push(ele);
    }
    return acc;
  }, []);
}

const nums3 = [3, 2, 6, 4, 9, 1];
console.log(getOddPositions3(nums3));

// 12. Write a function that computes the running total of a list.

function getTotal1(nums) {
  let sums = [];
  let runningTotal = 0;
  for (let i = 0; i < nums.length; i++) {
    runningTotal += nums[i];
    sums.push(runningTotal);
  }
  return sums;
}

function getTotal2(nums) {
  return nums.reduce((acc, ele, index) => {
    if (index == 0) {
      acc.push(ele);
    } else {
      acc.push(ele + acc[index - 1]);
    }
    return acc;
  }, []);
}

const nums4 = [1, 2, 3, 4, 5, 6];
console.log(getTotal2(nums4));

// 13. Write a function that tests whether a string is a palindrome.

function checkPalindrome1(str) {
  let i = 0,
    j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

function checkPalindrome2(str) {
  if (str.length <= 1) {
    return true;
  }

  return str[0] === str[str.length - 1] && checkPalindrome2(str.slice(1, -1));
}

function checkPalindrome3(str) {
  return str === str.split("").reverse().join("");
}

console.log(checkPalindrome2("saras"));

// 14. Write a function that concatenates two lists. [z,c,a], [11,12,13] → [z,c,a,11,12,13]
const list1 = ["z", "c", "a"];
const list2 = [11, 12, 13];

function concatenateLists1(list1, list2) {
  return list1.concat(list2);
}

function concatenateLists2(list1, list2) {
  const list3 = [];
  list1.forEach((ele) => {
    list3.push(ele);
  });
  list2.forEach((ele) => {
    list3.push(ele);
  });
  return list3;
}

function concatenateLists3(list1, list2) {
  return [...list1, ...list2];
}

console.log(concatenateLists3(list1, list2));

// 15. Write a function that combines two lists by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

function combineAlternately1(list1, list2) {
  const combinedList = [];
  const minLength = Math.min(list1.length, list2.length);

  for (let i = 0; i < minLength; i++) {
    combinedList.push(list1[i]);
    combinedList.push(list2[i]);
  }

  // adding the remaining elements from the longer list
  if (list1.length > minLength) {
    combinedList.push(...list1.slice(minLength));
  } else if (list2.length > minLength) {
    combinedList.push(...list2.slice(minLength));
  }

  return combinedList;
}

function combineAlternately2(list1, list2) {
  const combinedList = [];

  if (list1.length <= list2.length) {
    list1.map((ele, index) => {
      combinedList.push(list1[index]);
      combinedList.push(list2[index]);
    });
    combinedList.push(...list2.slice(list1.length));
  } else {
    list2.map((ele, index) => {
      combinedList.push(list1[index]);
      combinedList.push(list2[index]);
    });
    combinedList.push(...list1.slice(list2.length));
  }
  return combinedList;
}

function combineAlternately3(list1, list2) {
  const combinedList = list1.reduce((result, element, index) => {
    result.push(element);
    if (list2[index] !== undefined) {
      result.push(list2[index]);
    }
    return result;
  }, []);

  if (list2.length > list1.length) {
    combinedList.push(...list2.slice(list1.length));
  }

  return combinedList;
}

console.log(combineAlternately3(list1, list2));

// 16. Write a function that takes a number and returns a list of its digits. So for 2342 it should return [2,3,4,2].

function getDigitsFromNumber(num) {
  let str = String(num);
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(Number(str[i]));
  }
  return arr;
}

function getDigitsFromNumber2(num) {
  return String(num)
    .split("")
    .map((ele) => Number(ele));
  //return [...String(num)].map((ele)=>Number(ele));
  //spreading characters available in string
}

console.log(getDigitsFromNumber2(2342));

// 17. Write a JavaScript program to find duplicate values in a JavaScript array

function searchDuplicates1(nums) {
  const n = nums.length;
  let dups = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] === nums[j] && !dups.includes(nums[i])) {
        dups.push(nums[i]);
      }
    }
  }
  return dups;
}

function searchDuplicates2(array) {
  return array.filter((ele, index, selfArr) => selfArr.indexOf(ele) !== index);
}

function searchDuplicates3(nums) {
  let st = new Set();
  return nums.reduce((acc, value) => {
    if (st.has(value)) {
      acc.push(value);
    } else {
      st.add(value);
    }
    return acc;
  }, []);
}

function searchDuplicates4(array) {
  const map = new Map();
  const duplicates = [];

  array.forEach((value) => {
    if (map.has(value)) {
      duplicates.push(value);
    } else {
      map.set(value, true);
    }
  });

  return duplicates;
}

const nums5 = [1, 2, 3, 1, 4, 5, 2, 7, 8, 5];

console.log(searchDuplicates4(nums5));

// 18. Write a JavaScript function to merge two arrays and removes all duplicates elements

function mergeArraysAndRemoveDuplicates(arr1, arr2) {
  return [...new Set(arr1.concat(arr2))];
}

// 19. Write a JavaScript function to get nth largest element from an unsorted array

function getNthLargest(arr, n) {
  arr.sort();
  return arr[arr.length - n];
}

const nums6 = [4, 1, 7, 9, 2, 3, 8];

console.log(getNthLargest(nums6, 1));
console.log(nums6);

// 20. Write a JavaScript function to split a string and convert it into an array of words.(“RAJ SHAH”)->[“RAJ”,”SHAH”]
function convertIntoWords(str) {
  return str.split(" ");
}

const s = "RAJ SHAH";
console.log(convertIntoWords(s));

// 21. Write a JavaScript function to capitalize the first letter of a string

function capitalizeFirstLetterOfString1(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstLetterOfString1("chirag"));

// 22. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result

function findLargestOfFiveNumbers(num1, num2, num3, num4, num5) {
  if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    return num1;
  } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    return num2;
  } else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
    return num3;
  } else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
    return num4;
  } else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
    return num5;
  }
}

alert(findLargestOfFiveNumbers(4, 1, 3, 7, 2));

// 23. Write a JavaScript function that returns a passed string with letters in alphabetical order.

function sortAlphabetically1(str) {
  return str.split("").sort().join("");
}

console.log(sortAlphabetically1("chirag"));

// 24. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

function countVowelsWithinString1(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u" ||
      str[i] === "A" ||
      str[i] === "E" ||
      str[i] === "I" ||
      str[i] === "O" ||
      str[i] === "U"
    ) {
      count++;
    }
  }
  return count;
}

function countVowelsWithinString2(str) {
  return Array.from(str).reduce((count, char) => {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    ) {
      count++;
    }
    return count;
  }, 0);
}

function countVowelsWithinString3(str) {
  return Array.from(str).filter((char) => {
    return (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    );
  }).length;
}

console.log(countVowelsWithinString3("chirag"));

// 25. Write a JavaScript function to extract unique characters from a string

function getUniqueChars1(str) {
  const uniqueCharsSet = new Set(str);
  return [...uniqueCharsSet];
}

function getUniqueChars2(str) {
  let unique = new Set();
  let arr = [];
  for (const ch of str) {
    unique.add(ch);
  }
  for (const ch of unique) {
    arr.push(ch);
  }
  return arr;
}

function getUniqueChars3(str) {
  return str.split("").reduce((uniqueChars, char) => {
    if (!uniqueChars.includes(char)) {
      uniqueChars.push(char);
    }
    return uniqueChars;
  }, []);
}

function getUniqueChars4(str) {
  const charMap = new Map();
  const uniqueChars = [];

  for (const char of str) {
    if (!charMap.has(char)) {
      charMap.set(char, true);
      uniqueChars.push(char);
    }
  }

  return uniqueChars;
}

console.log(getUniqueChars4("apakaka"));

// 26. Write a JavaScript function to check whether a given value is alpha-numeric or not

function checkAlphaNumeric1(str) {
  return /^[a-zA-Z0-9]+$/.test(str);
}

console.log(checkAlphaNumeric1("aw233f%"));

// 27. Write a JavaScript function to check whether a given value is a hexadecimal value or not

function checkHexadecimal1(str) {
  return /^[0-9a-fA-F]+$/.test(str);
}

// 28. Write a function called displayObject() that takes an object as an argument and prints the person's first and last name. Use object destructuring in the function argument. Also, use template strings when printing the first and last names.

function displayObject({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

console.log(displayObject({ firstName: "Chirag", lastName: "Boghara" }));

// 29. Create a function that will receive an array of numbers as an argument and will return a new array with distinct elements

function getUniqueNumbers1(arr) {
  return Array.from(new Set(arr));
}

function getUniqueNumbers2(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

function getUniqueNumbers3(arr) {
  return arr.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
}

console.log(getUniqueNumbers1([3, 2, 3, 4, 5, 6, 7, 8, 4]));

// 30. Calculate the sum of the first 100 prime numbers and return them in an array.

function sumOfFirst100PrimeNumbers() {
  let sum = 0;
  let count = 0;
  let primeNumbers = [];
  for (let i = 2; count < 100; i++) {
    if (isGivenNumberPrime(i)) {
      sum += i;
      primeNumbers.push(i);
      count++;
    }
  }
  return { primeNumbers, sum };
}

function isGivenNumberPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const { primeNumbers, sum } = sumOfFirst100PrimeNumbers();
console.log(primeNumbers + " total Sum : " + sum);

// 31. Print the distance between the first 100 prime numbers.

const distance = primeNumbers.reduce((acc, ele, index, arr) => {
  if (index !== 0) {
    acc += ele - arr[index - 1];
  }
  return acc;
}, 0);

console.log(distance);
