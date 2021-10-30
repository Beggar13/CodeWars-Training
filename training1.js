"use strict";

function list(names) {
  let nameStr = "";
  for (let i = 0; i < names.length; i++) {
    const x = Object.values(names[i]);
    if (names.length === 1) {
      nameStr += `${x}`;
    } else if (i < names.length - 1 && i === names.length - 2) {
      nameStr += `${x} `;
    } else if (i < names.length - 1) {
      nameStr += `${x} `;
    } else {
      nameStr += `& ${x} `;
    }
  }
  console.log(nameStr);
}

list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]);

list([{ name: "Bart" }, { name: "Lisa" }]);

list([{ name: "Bart" }]);

list([]);
