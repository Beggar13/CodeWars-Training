"strict";

function count(string) {
  let obj = {};
  if (string.length > 0) {
    [...string].forEach(function (let) {
      obj[let] = (obj[let] || 0) + 1;
    });
    console.log(obj);
  } else if (string.length === 0) {
    return {};
  }
}

count("aba");
