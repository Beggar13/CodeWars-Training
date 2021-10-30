"strict";

function deleteNth(arr, n) {
  //   let emptyArr = {};
  //   arr.forEach(function (el) {
  //     emptyArr[el] = (emptyArr[el] || 0) + 1;
  //   });
  //   const timesArr = Object.values(emptyArr);

  let newArr = [];
  let count = new Array(arr.length - 1).fill(0);
  console.log(count);
  for (i = 0; i < arr.length; i++) {
    if (newArr.includes(arr[i])) {
      if (count[i] < n) {
        count[i]++;
        newArr.push(arr[i]);
      } else continue;
    } else {
      newArr.push(arr[i]);
      count[i]++;
      // TODO fix the counting
    }
  }
  console.log(newArr);
}

deleteNth([1, 1, 1, 1], 2);
deleteNth([20, 37, 20, 21, 37, 50, 21, 25, 21, 20], 2);

// function countEl(arr) {
//   let emptyArr = {};
//   arr.forEach(function (el) {
//     emptyArr[el] = (emptyArr[el] || 0) + 1;
//   });
//   const timesArr = Object.values(emptyArr);
// }
