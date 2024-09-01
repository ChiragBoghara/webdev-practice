function snailSort(arr) {
  let row = arr.length;
  let col = arr[0].length;

  let result = [];

  let top = 0;
  let bottom = row - 1;
  let left = 0;
  let right = col - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(arr[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result.push(arr[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(arr[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(arr[i][left]);
      }
      left++;
    }
  }

  return result;
}

const sortedArr = snailSort([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);

console.log(sortedArr);
