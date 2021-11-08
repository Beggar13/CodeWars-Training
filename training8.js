"strict";

function abbrevName(name) {
  const init = name
    .split(" ")
    .map((l, i) => l[0].toUpperCase())
    .join(".");

  console.log(init);
}

abbrevName("George Harris");
