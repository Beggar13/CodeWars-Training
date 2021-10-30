function filterList(l) {
  return l.filter((el) => typeof el === "number");
}

const list = [1, 2, "a", "b"];
const list2 = [1, "a", "b", 0, 15];
const list3 = [1, 2, "aasf", "1", "123", 123];

console.log(filterList(list));
console.log(filterList(list2));
console.log(filterList(list3));
