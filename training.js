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

//making numbers into array digits function
const digitsToArray = function (number) {
  let test;
  let count = 0;
  while (number > 9) {
    count++;
    const numberDigits = [];
    while (number > 0) {
      numberDigits.push(number % 10);
      number = Math.trunc(number / 10);
    }
    test = numberDigits.reverse().map((n) => (n === 0 ? (n = 1) : n));
    const multiDigits = test.reduce(function (acc, cur) {
      return acc * cur;
    }, 1);
    //make the multiplication to be the new number
    number = multiDigits;
  }
  console.log(count);
};

digitsToArray(258);
digitsToArray(39);
digitsToArray(999);
digitsToArray(4);
digitsToArray(55555);
digitsToArray(4);
digitsToArray(4);

// const persistence = function (num) {
//   let count = 0;g
//   while (num > 9) {
//     digitsToArray(num);
//     count++;
//   }
//   console.log(num);
//   console.log(count);
// };

// persistence(258);

/////// First attempt to build it

// const persistence = function (num) {
//   //making numbers into array digits function
//   const digitsToArray = function (number) {
//     const numberDigits = [];
//     while (number > 0) {
//       numberDigits.push(number % 10);
//       number = Math.trunc(number / 10);
//     }
//     numberDigits.reverse();
//     return numberDigits;
//   };
//   // calling function for the first number
//   const numArray = digitsToArray(num);
//   console.log(numArray);
//   //function for multiplying array digits between them
//   const multFunction = function (arr) {
//     const multResult = numArray.reduce(function (acc, cur) {
//       return acc * cur;
//     }, 1);
//     console.log(multResult);
//   };
//   multFunction(numArray);
//   digitsToArray;
// };

// persistence(258);

// if (mul < 10) {
//   return count, mul;
// } else {
// }

//first attempt before learning Reduce Method
// console.log(numArray);
//   //function for multiplying array digits between them
//   const multDigits = function (arr) {
//     let mul = 1;
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//       mul *= arr[i];
//       count++;
//     }
//     console.log(mul);
//     console.log(count);
//     return mul;
//   };
//   console.log(multDigits(numArray));



//////////////////

function solution(str, ending) {
  console.log(str.slice(-ending.length));
  if (ending.length === 0) {
    console.log(true);
  } else if (str.slice(-ending.length) === ending) {
    console.log(true);
  } else console.log(false);
}

solution("abc", "bc");
solution("abc", "d");
solution("abc", "");



///////////////////////////////
// BIT COUNTING

var countBits = function (n) {
  //turn integer to binary representation
  let binaryArr = [];
  while (n > 0) {
    binaryArr.push(n % 2);
    n = Math.trunc(n / 2);
  } //TODOthe last zero(whcih becomes first when reversing is missing)
  //reverse array to give binary representation
  binaryArr.reverse();
  console.log(binaryArr);
  //count ones
  let count = 0;
  binaryArr.forEach((x) => (x === 1 ? count++ : count));
  console.log(count);
};

countBits(0);
countBits(4);
countBits(7);
countBits(9);
countBits(10);
countBits(13350);

*/

//////////////////////////////////////////
//Persistend bugger debug

function persistence(num) {
  let test;
  let count = 0;
  while (num > 9) {
    count++;
    const numberDigits = [];
    while (num > 0) {
      numberDigits.push(num % 10);
      num = Math.trunc(num / 10);
    }
    test = numberDigits.reverse().map((n) => (n === 0 ? (n = 1) : n)); //finally this was the error. the actual persistence takes into conisderation the multiplication with 0. you don't need to avoid it
    const multiDigits = test.reduce(function (acc, cur) {
      return acc * cur;
    }, 1);
    num = multiDigits;
  }
  console.log(count);
}

persistence(6541314);
