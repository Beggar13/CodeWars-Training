const sheepArray = [
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

const countSheeps = function (arr) {
  let sheepCount = 0;
  arr.forEach((sheep) => (sheep === true ? sheepCount++ : sheepCount));
  return sheepCount;
};

countSheeps(sheepArray);
