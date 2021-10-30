"strict";

function deleteNth(arr, n) {
  //   let emptyArr = {};
  //   arr.forEach(function (el) {
  //     emptyArr[el] = (emptyArr[el] || 0) + 1;
  //   });
  //   const timesArr = Object.values(emptyArr);

  let newArr = [];
  let count = {};
  console.log(count);
  for (i = 0; i < arr.length; i++) {
    if (newArr.includes(arr[i])) {
      if (count[arr[i]] < n) {
        count[arr[i]]++;
        newArr.push(arr[i]);
        console.log(count);
      } else continue;
    } else {
      newArr.push(arr[i]);
      count[arr[i]] = (count[arr[i]] || 0) + 1;
      console.log(newArr);
      console.log(count);
    }
  }
  console.log(newArr);
}

deleteNth([20, 37, 20, 21, 37, 50, 21, 25, 21, 20], 3);
deleteNth([1, 1, 1, 1], 2);

// function countEl(arr) {
//   let emptyArr = {};
//   arr.forEach(function (el) {
//     emptyArr[el] = (emptyArr[el] || 0) + 1;
//   });
//   console.log(emptyArr);
//   const timesArr = Object.values(emptyArr);
// }

// countEl([20, 37, 20, 21, 37, 50, 21, 25, 21, 20]);
