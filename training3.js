function squareSum(numbers) {
  let numbersArray = new Array(numbers);
  return numbersArray
    .flat(numbersArray.length + 1)
    .map((num) => num ** 2)
    .reduce((acc, num) => acc + num, 0);
}

const arr = [[1, 2], 5];
const arr1 = [[0, 3, 4, 5], 50];
const arr2 = [1, 2, 2];

console.log(squareSum(arr));
console.log(squareSum(arr1));
console.log(squareSum(arr2));

// function squareSum2(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     numbers[i] = numbers[i] ** 2;
//     sum += numbers[i];
//   }
//   return sum;
// }

// console.log(squareSum2(arr));
// console.log(squareSum2(arr1));
// console.log(squareSum2(arr2));
