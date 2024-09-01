function isArmstrongNumber1(num) {
  //153 = 27 + 125 + 1;
  const power = String(num).length;
  let n = num;
  let sum = 0;
  while (n) {
    let rem = n % 10;
    sum = sum + rem ** power;
    n = Math.floor(n / 10);
  }
  return sum === num;
}

function isArmstrongNumber2(num) {
  const power = String(num).length;
  const sum = String(num)
    .split("")
    .reduce((acc, ele) => {
      return acc + Number(ele) ** power;
    }, 0);

  return sum === num;
}

console.log(isArmstrongNumber1(153));
console.log(isArmstrongNumber2(1652));
console.log(isArmstrongNumber2(9474));