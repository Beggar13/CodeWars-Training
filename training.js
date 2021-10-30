"strict";

/*

//CODEWARS Training 1
const sheeps = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countSheeps(arrayOfSheep) {
  const sumOfSheeps = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (typeof arrayOfSheep[i] !== "boolean") continue;
    if (arrayOfSheep[i] === true) sumOfSheeps += 1;
  }
  console.log(sumOfSheeps);
}

countSheeps(sheeps);

*/

//CODEWARS Training 2
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

//A)what is persistence? Explained above
//B)How to count each iterration
//C)How to stop the loop
//D)How to extract digits from number
//E)how to multiply array properties

//Sub-problems:
//A)Create function that multiplies digits between them
//b)Extract digits from numbers
// var num = 278;
// var digits = [];
// while (num > 0) {
//     digits.push(num % 10);
//     num = Math.trunc(num / 10);
// }
// digits.reverse();
// console.log(digits);
//c)Identify when number is single digit and stop it. If number <10

const persistence = function (num) {
  //making numbers into array digits function
  const digitsToArray = function (number) {
    numberDigits = [];
    while (number > 0) {
      numberDigits.push(number % 10);
      number = Math.trunc(number / 10);
    }
    return (numberArray = numberDigits);
  };
  // calling function for the first number
  const numArray = digitsToArray(num);
  console.log(numArray);
  //function for multiplying array digits between them
  const multDigits = function (arr) {
    let mul = 1;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      mul *= arr[i];
      count++;
    }
  };
  console.log(multDigits(numArray));
};

persistence(258);
// if (mul < 10) {
//   return count, mul;
// } else {
// }
