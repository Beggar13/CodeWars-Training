"strict";

function accum(s) {
  const res = [...s]
    .map((l, i) => l.toUpperCase() + l.repeat(i).toLowerCase())
    .join("-");
  console.log(res);
}

accum("abcd");
accum("ZpglnRxqenU");
