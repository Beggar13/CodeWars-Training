"use strict";

function list(names) {
  if (names.length > 0) {
    let empStr = "";
    if (names.length === 1) {
      empStr = `${names[0].name}`;
    } else if (names.length === 2) {
      empStr = `${names[0].name} & ${names[1].name}`;
    } else if (names.length > 2) {
      for (let i = 0; i < names.length - 2; i++) {
        empStr += `${names[i].name}, `;
      }
      empStr += `${names[names.length - 2].name} & ${
        names[names.length - 1].name
      }`;
    }
    console.log(empStr);
  } else {
    console.log("");
  }
}

list([
  { name: "Ruby" },
  { name: "George" },
  { name: "Bart" },
  { name: "Lisa" },
  { name: "Maggie" },
]);

list([
  { name: "George" },
  { name: "Bart" },
  { name: "Lisa" },
  { name: "Maggie" },
]);

list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]);

list([{ name: "Bart" }, { name: "Lisa" }]);

list([{ name: "Bart" }]);

list([]);

// function list(names) {
//   let nameStr = "";
//   for (let i = 0; i < names.length; i++) {
//     const x = Object.values(names[i]);
//     if (names.length === 1) {
//       nameStr += `${x}`;
//     } else if (names.length === 0) {
//       nameStr;
//     } else if (i < names.length - 1 && i === names.length - 2) {
//       nameStr += `${x}, `;
//     } else if (i < names.length - 1) {
//       nameStr += `${x} `;
//     } else {
//       nameStr += `& ${x} `;
//     }
//   }
//   console.log(nameStr);
// }
