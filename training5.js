function descendingOrder(n) {
  const s = Number(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
  console.log(s);
}

descendingOrder(42145);
descendingOrder(145263);
descendingOrder(123456789);

// movements.sort((a, b) => b - a);
